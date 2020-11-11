import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../utils/api'

export const getProductList = createAsyncThunk("productsList/getProductsList",
    async () => {
        const response = await api.get("products_list");
        return response.data;
    }
);


const initialState = {
    product_list: [],
    error: "",
    loading: ""
};

const productsListSlice = createSlice({
    name: "productsList",
    initialState,
    reducers: {
        addError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: {
        [getProductList.pending]: state => {
            state.loading = true;
        },
        [getProductList.rejected]: (state, action) => {
            state.loading = "";
            state.error = action.error.message;
        },
        [getProductList.fulfilled]: (state, action) => {
            state.loading = "";
            state.product_list = action.payload;
        }
    }
});

export const { addError } = productsListSlice.actions;
const productsListReducer = productsListSlice.reducer;

export default productsListReducer;

