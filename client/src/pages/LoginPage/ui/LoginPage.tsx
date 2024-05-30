
import { AuthForm, } from 'entities/Auth';
import { FC } from 'react';


interface LoginPageProps {
}

const LoginPage: FC<LoginPageProps> = () => (
  <>
  Login page
    <AuthForm isLogin={false}/>
  </>
);

export default LoginPage;