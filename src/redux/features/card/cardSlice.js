import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")) : [],
    wishList: localStorage.getItem("wishList") ? JSON.parse(localStorage.getItem("wishList")) : [],
    totalQuantity: 0,
    showCart: false,
    subtotal: 0,
    filter:"",
  },
  reducers: {
    clearcart(state, action) {
      state.itemList = [];
      state.wishList=[];
      state.totalQuantity = 0;
      state.showCart = false;
      state.subtotal = 0;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const exitingItem = state.itemList.find(
        (itemdata) => itemdata.item === newItem.id
      );
      if (exitingItem) {
        exitingItem.quantity++;
        exitingItem.total_price += newItem.price;
      } else {
        state.itemList.push({
          item: newItem.id,
          amount_item: newItem.price,
          quantity: newItem.quentyte,
          attr: ["color:red,weight:700mg"],
          total_price: newItem.price,
          order_from:newItem.order_from,
          productname: newItem.productname,
          feature_image: newItem.feature_image,
          p_brand: newItem.p_brand,
          p_category: newItem.p_category,
          p_avaleable:newItem.p_avaleable
        });

        state.totalQuantity++;
      }
        localStorage.setItem("cartdata", JSON.stringify(state.itemList));

      // console.log(localStorage.getItem('cartdata'));
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
      state.itemList = state.itemList.filter(
        (itemdata) => itemdata._id !== id
      );
      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },

    decrementQty(state, action) {
      const id = action.payload;
      const exitingItem = state.itemList.find(
        (itemdata) => itemdata.item === id
      );
      if (exitingItem) {
        if (exitingItem.quantity === 1) {
          state.itemList = state.itemList.filter(
            (itemdata) => itemdata.item !== id
          );
          state.totalQuantity--;
        } else {
          exitingItem.quantity--;
          exitingItem.total_price -= exitingItem.amount_item;
        }
      }

      // ami karci kaj ta
      localStorage.setItem("cartdata", JSON.stringify(state.itemList));
    },
    removefCart(state, action) {
      const id = action.payload;
      state.itemList = state.itemList.filter(
        (itemdata) => itemdata.item !== id
      );
      state.totalQuantity--;
      // ami karci kaj ta
      localStorage.setItem("cartdata", JSON.stringify(state.itemList));
    },

    getTotals(state, action) {
      let { total, quantity } = state.itemList.reduce(
        (cartTotal, itemList) => {
          const { amount_item, quantity } = itemList;
          const itemTotal = amount_item * quantity;

          cartTotal.total += itemTotal;
          // cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.totalQuantity = quantity;
      state.subtotal = total;
    },

    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;