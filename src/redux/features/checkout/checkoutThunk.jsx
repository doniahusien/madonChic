import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCheckoutInfo = createAsyncThunk("check/fetchCheckoutInfo",
    async (_, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/checkout-info", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const checkAddress = createAsyncThunk(
    "check/checkAddress",
    async (locationData, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/store-Location",
                locationData,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            
            return response.data;
        } catch (error) {
            console.error("Profile update error:", error.response?.data); 
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

export const checkout = createAsyncThunk(
    "check/checkout",
    async (_, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
console.log(token);

            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/checkout",
                {}, 
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);
