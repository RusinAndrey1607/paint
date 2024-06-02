import { createAsyncThunk } from "@reduxjs/toolkit";
import { paintApi } from "shared/api/index";
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "shared/consts/localStorage";

const loginByEmailAndPassword = createAsyncThunk(
    'auth/loginByEmailAndPassword',
    async (authData: paintApi.models.IAuthRequest, thunkAPI) => {
      try {
        const response = await paintApi.api.$login(authData);
        if (!response.data) {
          throw new Error();
        }
        localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, response.data.accessToken)
        return response.data;
      } catch (error:any) {
        return thunkAPI.rejectWithValue(`Login error: ${error.response.data.message}`)
      }
    },
  );
  
  export default loginByEmailAndPassword;