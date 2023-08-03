import { createSlice } from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;


const userSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: initialUser,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
        }
    }
});

// exporting reducers and actions
export const { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;