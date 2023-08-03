import { createSlice } from "@reduxjs/toolkit";

const initialTask = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : null;


const taskSlice = createSlice({
    name: "task",
    initialState: {
        taskData: initialTask,
        allTasks: {}
    },
    reducers: {
        addTaskSuccess: (state, action) => {
            state.taskData = action.payload;
        },
        addTaskFailure: (state) => {
            return state;
        },
        getAllTaskSuccess: (state, action) => {
            state.allTasks = action.payload;
        },
        getAllTaskFailure: (state) => {
            return state;
        },
        editTaskSuccess: (state, action) => {
            state.taskData = action.payload;
        },
        deleteTaskSuccess: (state, action) => {
            state.taskData = action.payload;
        },
        deleteTaskFailure: (state) => {
            return state;
        }
    }
});

// exporting reducers and actions
export const { addTaskSuccess
    , addTaskFailure,
    getAllTaskFailure,
    getAllTaskSuccess,
    editTaskSuccess,
    deleteTaskFailure,
    deleteTaskSuccess } = taskSlice.actions;
export default taskSlice.reducer;