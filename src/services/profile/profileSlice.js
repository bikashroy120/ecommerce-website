import {createAction, createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import profileServices from "./profileServices";




const initialState = {
    profile:[],
    singalOrder:{},
    dashbord:{},
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };


 export const creactOrder = createAsyncThunk(
    "profile/creactOrder",async(userData,thunkAPI)=>{
        try {
            return await profileServices.creactOrder(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error) 
        }
    }
  )


  export const getSingalOrder = createAsyncThunk(
    "profile/getSingalOrder",async(userData,thunkAPI)=>{
        try {
            return await profileServices.singalOrder(userData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )

  export const getDashbord = createAsyncThunk(
    "profile/getDashbord",async(userData,thunkAPI)=>{
        try {
            return await profileServices.dashbord()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )



  export const resetState = createAction("Reset_all");

  export const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{},
    extraReducers:(bulder)=>{
        bulder
        .addCase(creactOrder.pending,(state)=>{
            state.isLoading=true;
        }).addCase(creactOrder.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.order=action.payload;
        }).addCase(creactOrder.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
        .addCase(getSingalOrder.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getSingalOrder.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.singalOrder=action.payload;
        }).addCase(getSingalOrder.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })
        .addCase(getDashbord.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getDashbord.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.dashbord=action.payload;
        }).addCase(getDashbord.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
        })

    }
  })
  

  export default profileSlice.reducer; 