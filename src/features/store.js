import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart/CartSlice"
import menuReducer from "./menu/menuSlice"

const store = configureStore({
    reducer : {
Cart : CartReducer,
menu : menuReducer,
    }
})

export default store

