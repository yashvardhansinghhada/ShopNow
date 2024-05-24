import {configureStore }from "@reduxjs/toolkit";
import { CartSlice } from "./slices/Slices";

export const Store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
    }
})