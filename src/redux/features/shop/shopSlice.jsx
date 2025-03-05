import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./shopThunk";
const initialState = {
    product: [],
    loading: false,
    error: null,
}
const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;
        })
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});
export default shopSlice.reducer;