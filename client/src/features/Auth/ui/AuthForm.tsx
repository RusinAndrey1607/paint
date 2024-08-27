import React, { FC, FormEvent, useCallback } from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from 'app/providers/StoreProvider/config/store';

import { InputField } from 'shared/ui/InputField';
import { Button } from 'shared/ui/Button';
import { getAuthState } from '../model/selectors/getAuthState/getAuthState';
import { authActions } from '../model/slice/AuthSlice';
import { loginByEmailAndPassword }
    from '../model/services/loginByEmailAndPassword/loginByEmailAndPassword';
import { registerByEmailAndPassword }
    from '../model/services/registerByEmailAndPassword/registerByEmailAndPassword';

interface AuthFormProps {
  isLogin: boolean;
}

export const AuthForm: FC<AuthFormProps> = ({ isLogin }) => {
    const dispatch = useAppDispatch();
    const { email, password } = useAppSelector(getAuthState);

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(authActions.setEmail(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(authActions.setPassword(value));
        },
        [dispatch],
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
        [dispatch, email, password, isLogin],
    );
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-96 border rounded-md p-">
                <form
                    onSubmit={onSubmitLoginForm}
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h2 className="mb-4 text-2xl text-center">
                        {isLogin ? 'Login' : 'Register'}
                    </h2>

                    <InputField
                        label="Email"
                        id="email"
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Email"
                    />
                    <InputField
                        label="Password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Password"
                        className="mb-6"
                    />
                    <div className="flex items-center justify-between">
                        <Button type="submit" className="btn-primary w-full">
                            {isLogin ? 'SignIn' : 'SignUp'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
