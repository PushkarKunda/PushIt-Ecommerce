import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    productList: [],
}

export const fetchAllFilterProducts = createAsyncThunk('/products/fetchAllFilterProducts', async () => {
    const result = await axios.get('http://localhost:5000/api/shop/products/get')

    return result?.data;
})

const shopProductsSlice = createSlice({
    name: "shopProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllFilterProducts.pending, (state)=>{
            state.isLoading = true
        }).addCase(fetchAllFilterProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.productList = action.payload.data
        }).addCase(fetchAllFilterProducts.rejected, (state) => {
            state.isLoading = false
            state.productList = []
        })
    }
})

export default shopProductsSlice.reducer