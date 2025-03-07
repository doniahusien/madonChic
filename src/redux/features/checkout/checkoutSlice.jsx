import { createSlice } from '@reduxjs/toolkit';
import { fetchCheckoutInfo, checkAddress,checkout } from './checkoutThunk';

const initialState = {
    subtotal: 0,
    shipping: 0,
    total: 0,
    message: null,
    error: null,
};
const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCheckoutInfo.fulfilled, (state, action) => {
            state.subtotal = action.payload.subtotal;
            state.shipping = action.payload.shipping;
            state.total = action.payload.total;
        }).addCase(fetchCheckoutInfo.rejected, (state, action) => {
            state.error = action.error.message;
        })
            .addCase(checkAddress.fulfilled, (state, action) => {
                state.error = null;
                state.message = action.payload.message;
            }).addCase(checkAddress.rejected, (state, action) => {
                state.error = action.error.message;
            })
        .addCase(checkout.fulfilled, (state, action) => {
            state.error = null;
        }).addCase(checkout.rejected, (state, action) => {
            state.error = action.error.message;
        })
    },
})
export default checkoutSlice.reducer;