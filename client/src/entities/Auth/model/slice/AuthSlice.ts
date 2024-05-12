import { createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';


export const initialState: AuthSchema = {
  isAuth: false,
  isLoading:false,
  error:undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
  },
});

export const { reducer: authReducer } = authSlice;