import { models } from "@/shared/api/paint";
import { api } from "@/shared/api/paint/";
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "@/shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";

const registerByEmailAndPassword = createAsyncThunk(
    'auth/registerByEmailAndPassword',
    async (authData: models.IAuthRequest, thunkAPI) => {
      try {
        const {data} = await api.$registration(authData);
        localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, data.accessToken)
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    },
  );
  
  export default registerByEmailAndPassword;