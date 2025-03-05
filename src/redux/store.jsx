import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import homeReducer from './features/home/homeSlice'
import shopReducer from './features/shop/shopSlice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
        shop: shopReducer,
    }
})
export default store;