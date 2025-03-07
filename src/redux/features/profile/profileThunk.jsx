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

export const uploadImage = createAsyncThunk("profile/uploadImage",
    async (image, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post("https://e-commerce-production-8442.up.railway.app/api/profile/image", {
                image
                ,
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

export const updateProfile = createAsyncThunk(
    "profile/updateProfile",
    async (profileData, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/profile/update",
                profileData,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            dispatch(fetchProfile());
            return response.data;
        } catch (error) {
            console.error("Profile update error:", error.response?.data); 
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);
