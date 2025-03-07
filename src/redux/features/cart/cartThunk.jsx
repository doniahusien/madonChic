import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue, getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/cart", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const fetchCartCount = createAsyncThunk("cart/fetchCartCount", async (_, { rejectWithValue, getState }) => {
    try {
        const token = getState().auth.token;
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/cart/count", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ product_id, size, quantity }, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/cart/add",
                { product_id, size, quantity }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json", 
                    },
                }
            );
            dispatch(fetchCart());
            dispatch(fetchCartCount());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);


export const decrementProduct = createAsyncThunk(
    "cart/decrementProduct",
    async ({ product_id, size }, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/cart/decrement",
                { product_id, size }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json", 
                    },
                }
            );
            dispatch(fetchCart());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

export const removeProduct = createAsyncThunk(
    "cart/removeProduct",
    async ({ product_id, size }, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(
                "https://e-commerce-production-8442.up.railway.app/api/cart/remove",
                { product_id, size }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json", 
                    },
                }
            );
            dispatch(fetchCart());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

