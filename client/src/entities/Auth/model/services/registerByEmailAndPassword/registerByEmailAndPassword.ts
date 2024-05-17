import { paintApi } from 'shared/api/';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";

const registerByEmailAndPassword = createAsyncThunk(
    'auth/registerByEmailAndPassword',
    async (authData: paintApi.models.IAuthRequest, thunkAPI) => {
      try {
        const {data} = await paintApi.api.$registration(authData);
        localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, data.accessToken)
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    },
  );
  
  export default registerByEmailAndPassword;