import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authThunk";
const initialState = {
    loading: false,
    token: null,
    error: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        }).addCase(login.fulfilled, (state,action) => {
            state.token = action.payload.token;
            state.loading = true;
            state.error = false;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
    }
})
export default authSlice.reducer