import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import productServices from "./productServices";




const initialState = {
    product:[],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };


 export const getProduct = createAsyncThunk(
    "product/getProduct",async(userData,thunkAPI)=>{
        try {
            return await productServices.getProduct()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )


  export const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    reducers:{},
    extraReducers:(bulder)=>{
        bulder
        .addCase(getProduct.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.product=action.payload;
        }).addCase(getProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
    }
  })
  

  export default productSlice.reducer; 