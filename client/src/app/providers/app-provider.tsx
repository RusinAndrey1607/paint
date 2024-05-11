import { ReactNode } from "react";
import { FC } from "react";
import { StoreProvider } from "./StoreProvider";

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <>
      <StoreProvider>{children}</StoreProvider>
    </>
  );
};
