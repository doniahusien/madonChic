import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData, fetchMenProducts, fetchWomenProducts, fetchTopSellingProducts, fetchNewestProducts } from "./homeThunk";
const initialState = {
    men: [],
    women: [],
    top_selling: [],
    newest: [],
    products: [],
    currentPage: 1,
    totalPages: 1,
    max_price: 0,
    nextPageUrl: null,
    prevPageUrl: null,
    error: null,
    loading: false,
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //home products
            .addCase(fetchHomeData.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //men products
            .addCase(fetchMenProducts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.men = action.payload.men.data;
                state.totalPages = action.payload.men.last_page; 
                state.currentPage = action.payload.men.current_page; 
                state.nextPageUrl = action.payload.men.next_page_url; 
                state.prevPageUrl = action.payload.men.prev_page_url;
                state.max_price = action.payload.max_price;
            })
            .addCase(fetchMenProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = "error";
            })

            //women products
            .addCase(fetchWomenProducts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWomenProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.women = action.payload.women.data;
                state.totalPages = action.payload.women.last_page; 
                state.currentPage = action.payload.women.current_page; 
                state.nextPageUrl = action.payload.women.next_page_url; 
                state.prevPageUrl = action.payload.women.prev_page_url;
                state.max_price = action.payload.max_price;
            })
            .addCase(fetchWomenProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = "error";
            })
            
            //top selling products
            .addCase(fetchTopSellingProducts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopSellingProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.top_selling = action.payload.products;
                state.max_price = action.payload.max_price;
            })
            .addCase(fetchTopSellingProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = "error";
            })

            //newest products
            .addCase(fetchNewestProducts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewestProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.newest = action.payload.products;
                state.max_price = action.payload.max_price;
            })
            .addCase(fetchNewestProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = "error";
            })

    }
})

export const { setCurrentPage } = homeSlice.actions;
export default homeSlice.reducer;