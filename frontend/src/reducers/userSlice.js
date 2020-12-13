import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";


const initialState = {
    loading: false,
    error: '',
};


export const loginUser = createAsyncThunk("user/loginUser",
    async ({ email, password }) => {
        const response = await api.post("token/obtain/", {
            email, password
        });
        return response.data;
    }
)

export const createUser = createAsyncThunk("user/createUser",
    async ({ email, password, first_name, last_name }) => {
        const response = await api.post("users/create/", {
            email, password, first_name, last_name
        });
        return response.data;
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        errorLog: (state) => {
            state.error = true;
        }
    },
    extraReducers: {
        [loginUser.pending]: state => {
            state.loading = true;
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [loginUser.fulfilled]: (state) => {
            state.loading = false;
            window.location.href = '/';
            // Saving to localStorage is being done by the middleware
        },

        // user signup
        [createUser.pending]: state => {
            state.loading = true;
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            window.location.href = '/';
            // Saving tokens to localStorage is being done by the middleware
        }
    }
});

export default userSlice.reducer;