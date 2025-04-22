import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumDiscount, sumQuantity } from "../helper/functions";

const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data
    ? JSON.parse(data)
    : {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
        purchaseHistory: [],
      };
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.discount = sumDiscount(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.checkout = false;
        saveCartToLocalStorage(state);
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.discount = sumDiscount(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      saveCartToLocalStorage(state);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.discount = sumDiscount(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      saveCartToLocalStorage(state);
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.discount = sumDiscount(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      saveCartToLocalStorage(state);
    },
    checkout: (state) => {
      const newPurchase = {
        items: state.selectedItems,
        total: state.total,
        date: new Date().toISOString(),
      };
      state.purchaseHistory = [...state.purchaseHistory, newPurchase];
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
      saveCartToLocalStorage(state);
    },
    clear: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = false;
      state.purchaseHistory = [];
      saveCartToLocalStorage(state);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout, clear } =
  cartSlice.actions;
