import React, { FC, FormEvent, useCallback } from 'react'
import { getAuthState } from 'entities/Auth/model/selectors/getAuthState/getAuthState';
import { authActions } from 'entities/Auth/model/slice/AuthSlice';
import loginByEmailAndPassword from 'entities/Auth/model/services/loginByEmailAndPassword/loginByEmailAndPassword';
import registerByEmailAndPassword from 'entities/Auth/model/services/registerByEmailAndPassword/registerByEmailAndPassword';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/store';

interface AuthFormProps  {
  isLogin:boolean
}

const AuthForm: FC<AuthFormProps> = ({isLogin}) => {
  const dispatch = useAppDispatch();
  const {
    email, password,
  } = useAppSelector(getAuthState);

  const onChangeEmail = useCallback((value: string) => {
    dispatch(authActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
  }, [dispatch]);

  const onSubmitLoginForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLogin) {
      dispatch(loginByEmailAndPassword({email,password}));
    } else {
      dispatch(registerByEmailAndPassword({ email, password }));
    }
  }, [dispatch, email, password, isLogin]);
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm