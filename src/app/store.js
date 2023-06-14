import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../services/auth/authSlice"
import productReducer from "../services/product/productSlice"
import cartSlice from "../services/card/cardSlice";


export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        cart: cartSlice.reducer,
    }
})