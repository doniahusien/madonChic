import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(("auth/login", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("api/", formData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Login failed");
    }
}))
export const signup = createAsyncThunk("auth/signup", async (formData,{rejectWithValue}) => {
    try {
        const response = axios.post('/api/signup', formData);
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "Signup failed");
    }
})