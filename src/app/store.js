import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../services/auth/authSlice"
import productReducer from "../services/product/productSlice"


export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
    }
})