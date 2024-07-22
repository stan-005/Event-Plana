// interfaces/user.ts
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'organizer' | 'admin';
}
