import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    "shop/fetchProduct",
    async ({ product_id }, { rejectWithValue }) => {
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

export const fetchProductReview = createAsyncThunk(
    "shop/fetchProductReview",
    async ({ product_id }, { rejectWithValue }) => {
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

export const addProductReview = createAsyncThunk(
    "shop/addProductReview",
    async ({ product_id, stars, comment }, { rejectWithValue, getState, dispatch }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/add-reviews",
                { product_id, stars, comment }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                        "Content-Type": "application/json",
                    },
                }
            );
            dispatch(fetchProductReview({ product_id }));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
