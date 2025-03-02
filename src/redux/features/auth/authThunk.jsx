import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const login = createAsyncThunk("auth/login", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            "https://e-commerce-production-8442.up.railway.app/api/login",
            formData,
            { headers: { "Content-Type": "application/json" } }
        );
        console.log("Success:", response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Login failed");
    }
});


export const signup = createAsyncThunk("auth/signup", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            'https://e-commerce-production-8442.up.railway.app/api/sign',
            formData,
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
    }
    catch (errors) {
        return rejectWithValue(errors.response?.data || "Signup failed");
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post(
            'https://e-commerce-production-8442.up.railway.app/api/logout',
            {},
            {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get("token")}`
                }
            }
        );
        return response.data;
    }
    catch (error ){
        return rejectWithValue(error.response?.data || "Logout failed");
    }
})
