import dynamic from 'next/dynamic';

export const MainPageLazy = dynamic(() => import('./MainPage'), {
    loading: () => <div>Loading...</div>,
});
