import { createSlice } from "@reduxjs/toolkit";
import { fetchCart,fetchCartCount, addToCart, decrementProduct ,removeProduct } from "./cartThunk";
const initialState = {
    cart: [],
    total_items: 0,
    sub_total: 0,
    success: null,
    error: null,
    
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart;
            state.sub_total = action.payload.sub_total;
            state.total_items = action.payload.total_items;
        }).addCase(fetchCart.rejected, (state, action) => {
            state.cart = [];
        })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.success = action.payload.message;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.success = null;
            })
            .addCase(decrementProduct.fulfilled, (state, action) => {
                state.success = action.payload.message;
            })
            .addCase(decrementProduct.rejected, (state, action) => {
                state.success = null;
                state.error = "An error occurred";
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.success = action.payload.message;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.success = null;
                state.error = "An error occurred";
            })
        .addCase(fetchCartCount.fulfilled, (state, action) => {
            state.total_items = action.payload.total_items;
        })
        .addCase(fetchCartCount.rejected, (state, action) => {
            state.total_items = 0;
        });
    }
});

export default cartSlice.reducer;