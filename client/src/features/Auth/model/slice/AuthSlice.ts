import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { loginByEmailAndPassword }
    from '../services/loginByEmailAndPassword/loginByEmailAndPassword';
import { registerByEmailAndPassword }
    from '../services/registerByEmailAndPassword/registerByEmailAndPassword';

export const initialState: AuthSchema = {
    isAuth: false,
    isLoading: false,
    error: undefined,
    email: '',
    password: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
            state.error = undefined;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
            state.error = undefined;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        resetError(state) {
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByEmailAndPassword.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginByEmailAndPassword.fulfilled, (state, action) => {
            state.isAuth = true;
            state.isLoading = false;
        });
        builder.addCase(loginByEmailAndPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
        builder.addCase(registerByEmailAndPassword.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(registerByEmailAndPassword.fulfilled, (state, action) => {
            state.isAuth = true;
            state.isLoading = false;
        });
        builder.addCase(registerByEmailAndPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    },
});

export const { reducer: authReducer } = authSlice;
export const { actions: authActions } = authSlice;
