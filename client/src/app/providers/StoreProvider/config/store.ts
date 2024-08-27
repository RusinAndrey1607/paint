import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { canvasReducer } from 'entities/Canvas';
import { authReducer } from 'features/Auth';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        auth: authReducer,
        canvas: canvasReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['canvas/setCanvas'],
                ignoredPaths: ['canvas.canvas'],

            },
        }),
    });
}

export const AppStore = createReduxStore();

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
