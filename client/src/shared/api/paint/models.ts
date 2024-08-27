export interface IUser {
  email: string;
  id: number;
}

export interface ITokens {
    accessToken:string
    refreshToken:string
}

export interface IAuthResponse extends ITokens {
    user: IUser;
}

export interface IAuthRequest {
    email: string;
    password: string;
}
