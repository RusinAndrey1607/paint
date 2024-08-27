import { ReactNode, FC } from 'react';

import { StoreProvider } from './StoreProvider';

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider: FC<AppProviderProps> = ({ children }) => (
    <StoreProvider>{children}</StoreProvider>
);
