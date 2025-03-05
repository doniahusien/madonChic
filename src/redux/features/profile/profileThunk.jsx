import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProfile = createAsyncThunk("profile/fetchProfile",
    async (_, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/profile", {
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