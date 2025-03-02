import { createSlice } from "@reduxjs/toolkit";
import { login, signup ,logout} from "./authThunk";
import Cookies from "js-cookie";
const initialState = {
    loading: false,
    token: Cookies.get("token") || null,
    error: null,
    message: null
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        }).addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.loading = false;
            state.error = false;
            Cookies.set("token", action.payload.token, { expires: 5});
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
            //signup
            .addCase(signup.pending, (state) => {
                state.loading = true;
            }).addCase(signup.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.loading = false;
                state.error = false;
                Cookies.set("token", action.payload.token);
            }).addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.errors;
            })
        //logout 
        .addCase(logout.pending, (state) => {
            state.loading = true;
        }).addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.token = null;
            Cookies.remove("token");
        }).addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })

    }
})
export default authSlice.reducer