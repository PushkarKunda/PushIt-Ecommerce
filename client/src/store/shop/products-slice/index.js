import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    productList: [],
    productDetails: null,
}

export const fetchAllFilterProducts = createAsyncThunk('/products/fetchAllFilterProducts', async ({filterParams, sortParams}) => {

    const query = new URLSearchParams({
        ...filterParams,
        sortBy: sortParams
    })

    const result = await axios.get(`http://localhost:5000/api/shop/products/get?${query}`)

    return result?.data;
})

export const fetchProductDetails = createAsyncThunk('/products/fetchProductDetails', async (id) => {

    const result = await axios.get(`http://localhost:5000/api/shop/products/get/${id}`)

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
        .addCase(fetchProductDetails.pending, (state)=>{
            state.isLoading = true
        }).addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.productDetails = action.payload.data
        }).addCase(fetchProductDetails.rejected, (state) => {
            state.isLoading = false
            state.productDetails = null
        })
    }
})

export default shopProductsSlice.reducer