import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { authReducer } from "entities/Auth/model/slice/AuthSlice";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth:authReducer
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
