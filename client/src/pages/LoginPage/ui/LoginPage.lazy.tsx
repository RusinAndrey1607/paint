import dynamic from 'next/dynamic';

export const LoginPageLazy = dynamic(() => import('./LoginPage'), {
    loading: () => <div>Loading...</div>,
});
