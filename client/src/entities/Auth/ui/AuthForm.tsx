import React, { FC, FormEvent, useCallback } from "react";
import { getAuthState } from "entities/Auth/model/selectors/getAuthState/getAuthState";
import { authActions } from "entities/Auth/model/slice/AuthSlice";
import loginByEmailAndPassword from "entities/Auth/model/services/loginByEmailAndPassword/loginByEmailAndPassword";
import registerByEmailAndPassword from "entities/Auth/model/services/registerByEmailAndPassword/registerByEmailAndPassword";
import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/config/store";
import Input from "shared/ui/Input";

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector(getAuthState);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(authActions.setEmail(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(authActions.setPassword(value));
    },
    [dispatch]
  );

  const onSubmitLoginForm = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isLogin) {
        dispatch(loginByEmailAndPassword({ email, password }));
      } else {
        dispatch(registerByEmailAndPassword({ email, password }));
      }
    },
    [dispatch, email, password, isLogin]
  );
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-96 border rounded-md p-">
        <form
          onSubmit={onSubmitLoginForm}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="mb-4 text-2xl text-center">
            {isLogin ? "Login" : "Register"}
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary w-full" type="submit">
              {isLogin ? "SignIn" : "SignUp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
