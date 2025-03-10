import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, fetchCartCount, addToCart, decrementProduct, removeProduct } from "./cartThunk";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [], 
    total_items: JSON.parse(localStorage.getItem("total_items")) || 0,
    sub_total: JSON.parse(localStorage.getItem("sub_total")) || 0,
    success: null,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartFromLocalStorage: (state) => {
            state.cart = JSON.parse(localStorage.getItem("cart")) || [];
            state.total_items = JSON.parse(localStorage.getItem("total_items")) || 0;
            state.sub_total = JSON.parse(localStorage.getItem("sub_total")) || 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cart = action.payload.cart;
                state.sub_total = action.payload.sub_total;
                state.total_items = action.payload.total_items;

                // Store updated cart in localStorage
                localStorage.setItem("cart", JSON.stringify(action.payload.cart));
                localStorage.setItem("total_items", JSON.stringify(action.payload.total_items));
                localStorage.setItem("sub_total", JSON.stringify(action.payload.sub_total));
            })
            .addCase(fetchCart.rejected, (state) => {
                state.cart = [];
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.success = action.payload.message;
            })
            .addCase(decrementProduct.fulfilled, (state, action) => {
                state.success = action.payload.message;
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.success = action.payload.message;
            });
    },
});

export const { setCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
