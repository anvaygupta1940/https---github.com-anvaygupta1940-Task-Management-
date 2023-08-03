import { configureStore } from '@reduxjs/toolkit'

import authReducer from "./authRedux.js";
import taskReducer from "./taskRedux.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        task: taskReducer,
    }
})