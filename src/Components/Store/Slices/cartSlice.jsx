import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems = [...state.cartItems, action.payload];
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
        updateTotalValue: (state, action) => {
            // console.log("Count Value in action: ", action.payload.count);
            state.cartItems = state.cartItems.map((e) => {
                if (action.payload.product.id === e.id) {
                  e.subtotal = action.payload.count * e.price;
                }
                return e;
              }
              )
        }
    }
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, updateTotalValue } = cartSlice.actions;