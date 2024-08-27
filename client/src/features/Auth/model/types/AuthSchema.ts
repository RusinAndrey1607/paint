export interface AuthSchema {
  isLoading: boolean;
  error?: string | undefined;
  isAuth: boolean;
  email: string,
  password: string,
}
