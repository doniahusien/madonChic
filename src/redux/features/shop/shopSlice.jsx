import { createSlice } from "@reduxjs/toolkit";
import { addProductReview, fetchProduct, fetchProductReview } from "./shopThunk";
const initialState = {
    product: [],
    review: [],
    loading: false,
    error: null,
    success: null,
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
            //product review 
            .addCase(fetchProductReview.fulfilled, (state, action) => {
                state.review = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductReview.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductReview.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            //add review 
            .addCase(addProductReview.fulfilled, (state, action) => {
                state.success = action.payload.message;
                state.loading = false;
            })
            .addCase(addProductReview.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});
export default shopSlice.reducer;