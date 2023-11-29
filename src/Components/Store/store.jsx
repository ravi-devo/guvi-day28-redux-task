import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "./Slices/quantitySlice";

const store = configureStore({
    reducer: {
        //name: reducerFunction
        count: quantityReducer
    }
});

export default store;

