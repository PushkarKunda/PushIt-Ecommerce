import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/store/auth-slice/index.jsx";
import adminProductsSlice from './admin/products-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: adminProductsSlice
    },
});

export default store;