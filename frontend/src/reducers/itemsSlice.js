import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connectionStatus: "",
    total_weight: 0,
    total_price: 0,
    items: [],
}

const itemsSlice = createSlice({
    name: "itemsList",
    initialState,
    reducers: {

        connectionOpened: (state) => {
            state.connectionStatus = "opened";
        },

        setNewItem: (state, action) => {
            state.items.push(action.payload);
            state.total_weight += action.payload.product.weight;
            state.total_price += action.payload.product.price;
        },

        connectionClosed: (state) => {
            state.conectionStatus = "closed";
        },

        ws_connect: () => {
            console.log("inside reducer ws_connect")
        },

        ws_send_message: () => {
            console.log("inside reducer ws_send_message")
        },

        ws_disconnect: () => {
            console.log("inside reducer ws_disconnect")
        },

    }
});

export const { connectionOpened, setNewItem, connectionClosed, ws_connect, ws_disconnect, ws_send_message } = itemsSlice.actions;

export default itemsSlice.reducer;
