import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
// import { StateSchema } from "../config/StateSchema";
import { AppStore } from "../config/store";

interface StoreProviderProps {
  children: ReactNode;
  // initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  // initialState
}) => {
  return <Provider store={AppStore}>{children}</Provider>;
};

