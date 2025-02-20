import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "Cart",
    initialState : {
        All_Carts : [],
        Cart_Data : [],
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : (builder)  => {
        builder
        .addCase(fetchData.pending , (state , action) =>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(fetchData.fulfilled , (state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.All_Carts = action.payload
            state.isError = false
            state.message = ""
        })
        .addCase(fetchData.rejected , (state , action) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export default CartSlice.reducer

export const fetchData = createAsyncThunk("FETCH/DATA" , async () =>{
    try {
        const response = await fetch("https://smoothies-api.onrender.com/smoothies")
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
    })

    