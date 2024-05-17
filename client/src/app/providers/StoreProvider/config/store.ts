import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { authReducer } from "entities/Auth/model/slice/AuthSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth:authReducer
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}

export const AppStore = createReduxStore();

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;