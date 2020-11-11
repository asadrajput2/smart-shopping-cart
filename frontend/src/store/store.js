import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsListReducer from "../reducers/productsListSlice";
import { saveTokensMiddleware } from "../middleware/userMiddleware";
import userReducer from '../reducers/userSlice'


const middleware = [
    saveTokensMiddleware,
    ...getDefaultMiddleware()
];

const store = configureStore({
    reducer: {
        products: productsListReducer,
        user: userReducer
    },
    middleware
})

export default store;