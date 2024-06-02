import { paintApi } from 'shared/api/';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "shared/consts/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
const registerByEmailAndPassword = createAsyncThunk(
    'auth/registerByEmailAndPassword',
    async (authData: paintApi.models.IAuthRequest, thunkAPI) => {
      try {
        const response = await paintApi.api.$registration(authData);
        if (!response.data) {
          throw new Error();
        }
        localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, response.data.accessToken)
        return response.data;
      } catch (error:any) {
        return thunkAPI.rejectWithValue(`Registation error: ${error.response.data.message}`)
      }
    },
  );
  
  export default registerByEmailAndPassword;