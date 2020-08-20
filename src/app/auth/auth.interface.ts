export interface AuthResponse {
  idToken: string;
  expiresIn: string;
  email: string;
  refreshToken: string;
  localId: string;
  registered?: boolean;
}
