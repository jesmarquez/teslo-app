import type { User } from "../../interfaces/user.response";

// Login, Register, CheckStatus
export interface AuthResponse {
  user:  User;
  token: string;
}
