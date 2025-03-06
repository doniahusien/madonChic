import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import homeReducer from './features/home/homeSlice'
import shopReducer from './features/shop/shopSlice'
import profileReducer from './features/profile/profileSlice'
import cartReducer from './features/cart/cartSlice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
        shop: shopReducer,
        profile: profileReducer,
        cart: cartReducer,
    }
})
export default store;