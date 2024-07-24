// src/types/express.d.ts
import { User } from '../src/interfaces/user'; // Adjust the import path as necessary

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
