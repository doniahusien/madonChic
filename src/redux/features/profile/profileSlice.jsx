import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile } from "./profileThunk";
const initialState = {
    profile: {},
    error: null,
    loading: false,
    orders: [],
}
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action.payload;
            state.orders = action.payload.orders;
        }).addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});
export default profileSlice.reducer;