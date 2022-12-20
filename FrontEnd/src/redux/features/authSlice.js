import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const register = createAsyncThunk(
    "auth/signup",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await api.signUp(formValue);
            navigate("/dashboard");
            toast.success("Registered Successfull");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    });

export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await api.signIn(formValue);
            navigate("/dashboard");
            toast.success("Login Successfull");
            console.log("got response", response.data)
            return response.data;
        } catch (error) {
            //console.log("Rejected login: ", error.response.data);
            return rejectWithValue(error.response.data);
        }
    });

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: null,
        error: "",
        loading: false,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload.access_token);
            state.user = {
                name: "test name",
                email: "test@name.com",
                photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            };
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            localStorage.clear();
            state.token = null;
            state.user = null;
        },
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("token", action.payload.token.access_token);
            state.token = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("token", action.payload.access_token);
            state.token = action.payload;
            state.user = {
                name: "test name",
                email: "test@name.com",
                photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            };
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            console.log(action);
            state.error = action.payload.message;
        },
    },
});

export const { setToken, logout, setUser } = authSlice.actions;

export default authSlice.reducer;