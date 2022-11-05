import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "./productService";

interface IProduct {
    products: any[],
    isError: boolean,
    isLoading: boolean,
    isSuccess: boolean;
}

const initialState: any = {
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
};

export const getProducts: any = createAsyncThunk("product/getProducts", async (_, thunkAPI) => {
    try {
        return await productsService.getProducts();
    } catch (error: any) {
        const err = error.response.error;
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
})

export const productSlice: any = createSlice({
    name: "product",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.isError = false;
            state.isLoading =  false;
            state.isSuccess = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
                state.isSuccess = false;
            })    
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.products = action.payload;
            })        
            .addCase(getProducts.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.products = action.payload;
            })
    },
});

export const { reset } = productSlice.actions;


export default productSlice.reducer;