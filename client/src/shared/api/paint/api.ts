import { AxiosPromise } from "axios";
import { IAuthRequest, IAuthResponse } from "./models";
import { $paint } from "./base";

export const $registration = (data:IAuthRequest):AxiosPromise<IAuthResponse> => $paint.post('/auth/registration',data)