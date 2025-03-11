import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeData = createAsyncThunk("home/fetchHomeData", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/home");
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "failed to fetch products");
    }
})

export const fetchMenProducts = createAsyncThunk(
    "home/fetchMenProducts",
    async ({ page = 1, category = "", low_price = 0, max_price = "" }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://e-commerce-production-8442.up.railway.app/api/men?page=${page}&category=${category}&low_price=${low_price}&max_price=${max_price}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);


export const fetchWomenProducts = createAsyncThunk(
    "home/fetchWomenProducts",
    async ({ page = 1, category = "", low_price = 0, max_price = "" }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://e-commerce-production-8442.up.railway.app/api/women?page=${page}&category=${category}&low_price=${low_price}&max_price=${max_price}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);



export const fetchTopSellingProducts = createAsyncThunk(
    "home/fetchTopSellingProducts",
    async ({category = "", low_price = 0, max_price = "" }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://e-commerce-production-8442.up.railway.app/api/topselling?category=${category}&low_price=${low_price}&max_price=${max_price}`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);


export const fetchNewestProducts = createAsyncThunk(
    "home/fetchNewestProducts",
    async ({category = "", low_price = 0, max_price = "" }, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://e-commerce-production-8442.up.railway.app/api/newest?category=${category}&low_price=${low_price}&max_price=${max_price}`
            );
            console.log(response.data );
            
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
