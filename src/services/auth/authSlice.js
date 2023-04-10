import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";


const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};



export const regester = createAsyncThunk(
    "auth/regester",
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
    reducers: {},
    extraReducers: (buildeer) => {
        buildeer
        .addCase(regester.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(regester.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.message = "success";
          console.log(action.payload)
        })
        .addCase(regester.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.error;
          state.isLoading = false;
        })
    }


})