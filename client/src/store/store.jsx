import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/store/auth-slice/index.jsx";
import adminProductsSlice from './admin/products-slice'
import shopProductsSlice from './shop/products-slice'
import shoppingCartSlice from './shop/cart-slice/index.js'
import commonFeatureSlice from './common-slice/index.js'
import shopAddressSlice from './shop/address-slice/index.js'
import shopOrderSlice from './shop/order-slice/index.js'

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: adminProductsSlice,
        shopProducts: shopProductsSlice,
        shopCart: shoppingCartSlice,
        commonFeature: commonFeatureSlice,
        shopAddress: shopAddressSlice,
        shopOrder: shopOrderSlice
    },
});

export default store;