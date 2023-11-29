import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "./Slices/quantitySlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
    reducer: {
        //name: reducerFunction
        count: quantityReducer,
        cart: cartReducer
    }
});

export default store;

