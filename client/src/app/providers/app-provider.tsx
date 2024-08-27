import { ReactNode, FC, Suspense } from 'react';

import { StoreProvider } from './StoreProvider';

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider: FC<AppProviderProps> = ({ children }) => (
    <Suspense fallback="Loading...">
        <StoreProvider>{children}</StoreProvider>

    </Suspense>
);
