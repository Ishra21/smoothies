import {  createSlice } from "@reduxjs/toolkit";
const initialState = {
    menu : JSON.parse(localStorage.getItem("menu"))
}
const menuSlice = createSlice({
    name : "menu",
    initialState,
    reducers : {
        addToCart: (state, action) => {
            if (!state.menu) {
                state.menu = [];  // Initialize if null
            }
        
            const item = action.payload;
            const existingItem = state.menu.find(cartItem => cartItem.id === item.id);
        
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.menu.push({ ...item, quantity: 1, add_ons: item.add_ons ? [...item.add_ons] : [] });
            }
        },

        handleIncrese :(state,action) =>{
            const item = state.menu.find(cartItem => cartItem.id === action.payload.id)
            if(item){
                item.quantity += 1
            }
        },
        handleDecrease :(state,action) =>{
            const item = state.menu.find(cartItem => cartItem.id === action.payload.id)
            if(item && item.quantity>1){
                item.quantity -= 1
            }
        },
        handleRemoveItem :(state , action)=>{
            state.menu = state.menu.filter(cartItem => cartItem.id !== action.payload.id)
        },
        updateAddOns: (state, action) => {
            const { id, addOn } = action.payload;
            const item = state.menu.find((item) => item.id === id);
            if (item) {
                if (!item.selectedAddOns) {
                item.selectedAddOns = [];
                }
              item.selectedAddOns.push(addOn); // Add new add-on
            }
            }
    
    },

    extraReducers : (builder) =>{}
})



export const{addToCart , handleDecrease , handleIncrese , handleRemoveItem , updateAddOns} = menuSlice.actions 
export default menuSlice.reducer 

