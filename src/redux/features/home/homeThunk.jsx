import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeData = createAsyncThunk("home/fetchHomeData", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/home");
        console.log(response.data);
        
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "failed");
    }
})

export const fetchMenProducts = createAsyncThunk("home/fetchMenProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/men?low_price&max_price=&category");
        console.log(response.data);
        
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "failed");
    }
})
export const fetchWomenProducts = createAsyncThunk("home/fetchWomenProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/women?low_price&max_price=&category=");
        console.log(response.data);
        
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "failed");
    }
})

export const fetchTopSellingProducts = createAsyncThunk("home/fetchTopSellingProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/topselling?low_price=&max_price=&category=");
        console.log(response.data);
        
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "failed");
    }
})
export const fetchNewestProducts = createAsyncThunk("home/fetchNewestProducts", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("https://e-commerce-production-8442.up.railway.app/api/newest?low_price=&max_price=&category=");
        console.log(response.data);
        
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "failed");
    }
})