import type { AppProps } from 'next/app';
import { AppProvider } from './providers/app-provider';
import './global.css';

export function App({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}
