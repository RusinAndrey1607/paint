import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {};
  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
