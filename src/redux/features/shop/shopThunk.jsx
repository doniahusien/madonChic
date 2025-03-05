import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProduct = createAsyncThunk(
    "shop/fetchProduct",
    async ({product_id}, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://e-commerce-production-8442.up.railway.app/api/shop?product_id=${product_id}`
            );
            return response.data.product;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

export const fetchProductReview= createAsyncThunk(
    "shop/fetchProductReview",
    async ({product_id}, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://e-commerce-production-8442.up.railway.app/api/get-reviews?product_id=${product_id}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);