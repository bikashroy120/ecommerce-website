import {createAction, createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import productServices from "./productServices";




const initialState = {
    product:[],
    Singalproduct:{},
    caregory:[],
    wishlist:[],
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

  export const getSingalProduct = createAsyncThunk(
    "product/getSingalProduct",async(userData,thunkAPI)=>{
        try {
            return await productServices.getSingalProduct(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )

  export const creactWishlist = createAsyncThunk(
    "product/creactWishlist",async(data,thunkAPI)=>{
        try {
            return await productServices.creactWishlist(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )

  export const getWishlist = createAsyncThunk(
    "product/getWishlist",async(thunkAPI)=>{
        try {
            return await productServices.getWishlist()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )

  export const getProductCategory = createAsyncThunk(
    "product/getProductCategory",async(thunkAPI)=>{
        try {
            return await productServices.getCategory()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )


  export const resetState = createAction("Reset_all");

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
        .addCase(getSingalProduct.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getSingalProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.Singalproduct=action.payload;
        }).addCase(getSingalProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
        .addCase(creactWishlist.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(creactWishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.wishadd=action.payload;
        }).addCase(creactWishlist.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
        .addCase(getWishlist.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getWishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.wishlist=action.payload;
        }).addCase(getWishlist.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
        .addCase(getProductCategory.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getProductCategory.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.caregory=action.payload;
        }).addCase(getProductCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
        .addCase(resetState, () => initialState);
    }
  })
  

  export default productSlice.reducer; 