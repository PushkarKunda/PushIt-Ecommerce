import {configureStore, createStore} from "@reduxjs/toolkit";
import authReducer from "@/store/auth-slice/index.jsx";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;