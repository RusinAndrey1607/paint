import React, { FC, FormEvent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAuthState } from 'entities/Auth/model/selectors/getAuthState/getAuthState';
import { authActions } from 'entities/Auth/model/slice/AuthSlice';
import loginByEmailAndPassword from 'entities/Auth/model/services/loginByEmailAndPassword/loginByEmailAndPassword';
import registerByEmailAndPassword from 'entities/Auth/model/services/registerByEmailAndPassword/registerByEmailAndPassword';

interface AuthFormProps  {
  isLogin:boolean
}

const AuthForm: FC<AuthFormProps> = ({isLogin}) => {
  const dispatch = useDispatch();
  const {
    email, password,
  } = useSelector(getAuthState);

  const onChangeEmail = useCallback((value: string) => {
    dispatch(authActions.setEmail(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
  }, [dispatch]);

  const onSubmitLoginForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLogin) {
      //I need to fix dispatch type
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