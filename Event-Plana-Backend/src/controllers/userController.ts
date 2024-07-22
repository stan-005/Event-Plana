import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user';
import { getUserByEmail, createUser } from '../services/userService';

export const register = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user: User = { id: Date.now(), username, email, password: hashedPassword, role };

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = await createUser(user);
  res.status(201).json(newUser);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, role: user.role },  process.env.JWT_SECRET as string, { expiresIn: '4h' });
  res.status(200).json({ token });
};
