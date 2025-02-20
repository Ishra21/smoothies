import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart/CartSlice"

const store = configureStore({
    reducer : {
Cart : CartReducer,
    }
})

export default store