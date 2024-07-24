export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'organizer' | 'admin';
  profileImage?: string | null; // Optional profile image field
  passwordResetToken?: string | null; // Optional password reset token field
  passwordResetExpires?: Date | null; // Optional password reset expiration field
}
