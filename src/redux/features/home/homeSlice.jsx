import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData,fetchMenProducts,fetchWomenProducts,fetchTopSellingProducts,fetchNewestProducts} from "./homeThunk";
const initialState = {
    men: [],
    women: [],
    top_selling: [],
    newest: [],
    error: null,
    loading: false,
    products:[],
}

const homeSlice = createSlice({
    name: "home",
    initialState,   
    reducers: {},
    extraReducers: (builder) => {
        builder
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
        .addCase(fetchMenProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMenProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.men = action.payload.men;
        })
        .addCase(fetchMenProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "error";
        })
        .addCase(fetchWomenProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchWomenProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.women = action.payload.women;
        })
        .addCase(fetchWomenProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "error";
        })
        .addCase(fetchTopSellingProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTopSellingProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.top_selling = action.payload.products;
        })
        .addCase(fetchTopSellingProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "error";
        })
        .addCase(fetchNewestProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchNewestProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.newest = action.payload.products;
        })
        .addCase(fetchNewestProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "error";
        })
    
    }
})
export default homeSlice.reducer;