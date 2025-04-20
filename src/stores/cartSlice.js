import { createSlice } from "@reduxjs/toolkit";
import { sumDiscount, sumPrice, sumQuantity } from "../helper/functions";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  discount: 0,
  checkout: false,
  purchaseHistory: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.discount = sumDiscount(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
      }
    },

    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.total = sumPrice(state.selectedItems);
      state.discount = sumDiscount(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    increase: (state, action) => {
      const itemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[itemIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.discount = sumDiscount(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    decrease: (state, action) => {
      const itemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[itemIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.discount = sumDiscount(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
    },

    checkout: (state) => {
      const newPurchase = {
        items: state.selectedItems,
        total: state.total,
        date: new Date().toISOString(), // ✅ تاریخ معتبر
      };

      state.purchaseHistory.push(newPurchase);
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.discount = 0;
      state.checkout = true;
    },

    clear: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.discount = 0;
      state.checkout = false;
      state.purchaseHistory = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout, clear } =
  cartSlice.actions;
