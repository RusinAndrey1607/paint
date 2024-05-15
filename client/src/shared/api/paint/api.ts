import { AxiosPromise } from "axios";
import { IAuthRequest, IAuthResponse } from "./models";
import { $paint } from "./base";

export const $registration = (data:IAuthRequest):AxiosPromise<IAuthResponse> => $paint.post('/auth/registration',data)
export const $login = (data:IAuthRequest):AxiosPromise<IAuthResponse> => $paint.post('/auth/login',data)