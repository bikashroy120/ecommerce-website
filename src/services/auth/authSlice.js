import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";
import {toast} from "react-toastify"

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  filter:"",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  sError:false,
  sLoadding:false,
  Ssuccess:false
};


export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.regester(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    subCata(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
        if(state.isSuccess){
          toast.success("login successfully !")
          localStorage.setItem("user", JSON.stringify(action.payload));
        }

      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if(state.isError){
          toast.error(action.error)
        }
      })
      .addCase(register.pending, (state) => {
        state.sLoadding = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.sError = false;
        state.sLoadding = false;
        state.Ssuccess = true;
        state.singup = action.payload;
        state.message = "success";
        state.user = action.payload;
        if(state.Ssuccess){
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.sError = true;
        state.Ssuccess = false;
        state.message = action.error;
        state.sLoadding = false;
      })
  },
});

export default authSlice.reducer;
