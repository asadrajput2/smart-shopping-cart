import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsListReducer from "../reducers/productsListSlice";
import { saveTokensMiddleware } from "../middleware/userMiddleware";
import userReducer from '../reducers/userSlice'
import itemMiddleware from "../middleware/itemMiddleware";
import itemsReducer from "../reducers/itemsSlice";


const middleware = [
    itemMiddleware,
    saveTokensMiddleware,
    ...getDefaultMiddleware()
];

const store = configureStore({
    reducer: {
        products: productsListReducer,
        user: userReducer,
        itemsList: itemsReducer
    },
    middleware
})

export default store;