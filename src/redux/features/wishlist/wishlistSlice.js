import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishList",
  initialState: {
    wishList: localStorage.getItem("wishList") ? JSON.parse(localStorage.getItem("wishList")) : [],
  },
  reducers: {
    clearcart(state, action) {
      state.wishList=[];
    },
    addToWhishList(state, action) {
      const newItem = action.payload;
      console.log("hello====",newItem)
      const exitingItem = state.wishList.find(
        (itemdata) => itemdata._id === newItem._id
      );
      if (exitingItem) {

      } else {
        state.wishList.push(newItem);
      }
        localStorage.setItem("wishList", JSON.stringify(state.wishList));

      // console.log(localStorage.getItem('cartdata'));
    },

    removeToWhishList(state, action) {
      const id = action.payload;
      state.wishList = state.wishList.filter(
        (itemdata) => itemdata._id !== id
      );
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },

  },
});
export const wishActions = wishlistSlice.actions;
export default wishlistSlice;