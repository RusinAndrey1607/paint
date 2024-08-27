import { useAppSelector } from 'app/providers/StoreProvider/config/store';
import { AuthForm, getAuthState } from 'features/Auth';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
    const router = useRouter();

    const { isAuth } = useAppSelector(getAuthState);
    if (isAuth) {
        router.push('/');
    }
    return (
        <AuthForm isLogin={false} />
    );
};

export default LoginPage