"use client"

import { configureStore} from "@reduxjs/toolkit"
import {apiSlice} from "./features/api/apiSlice"
import authSlice from "./features/auth/authSlice"
import cartSlice from "../services/card/cardSlice"
import wishlistSlice from "./features/wishlist/wishlistSlice"



export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authSlice,
        cart: cartSlice.reducer,
        wishList:wishlistSlice.reducer
    },
    devTools:false,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})


// call the refresh token function on every page load
const initializeApp = async ()=>{
    await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}))
}

initializeApp()