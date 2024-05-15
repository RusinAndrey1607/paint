import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, models } from "shared/api/paint";
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "shared/consts/localStorage";

const loginByEmailAndPassword = createAsyncThunk(
    'auth/loginByEmailAndPassword',
    async (authData: models.IAuthRequest, thunkAPI) => {
      try {
        const {data} = await api.$login(authData);
        localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, data.accessToken)
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    },
  );
  
  export default loginByEmailAndPassword;