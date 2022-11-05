import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice";
// import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        products: productReducer
    },
    // middleware: [applyMiddleware(thunk), getDefaultMiddleware()]
})

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;


