import history from "../history.js";
import {
    loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure
} from "./authRedux.js";
import {
    addTaskSuccess, addTaskFailure, getAllTaskFailure,
    getAllTaskSuccess, deleteTaskFailure, deleteTaskSuccess
} from "./taskRedux.js";
import axios from "axios";

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:8000/api/auth/register", user);
        dispatch(registerSuccess(res.data));
        history.push("/signin");
        window.location.reload();
    } catch (err) {
        dispatch(registerFailure());
    }
}


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/api/auth/login", user);
        if (res) {
            dispatch(loginSuccess(res.data));
            localStorage.setItem('auth', JSON.stringify(res.data));
            history.push("/dashboard");
            window.location.reload();
        } else {
            dispatch(loginFailure());
        }
    } catch (err) {
        dispatch(loginFailure());
    }
}


export const addTask = async (dispatch, task) => {
    try {
        const res = await axios.post("http://localhost:8000/api/task/add", task);

        if (res) {
            dispatch(addTaskSuccess(res.data));
            localStorage.setItem('task', JSON.stringify(res.data));
            window.location.reload();
        } else {
            dispatch(addTaskFailure());
        }
    } catch (err) {
        dispatch(addTaskFailure());
    }
}


export const getallTasks = async (dispatch, detail) => {
    try {
        const res = await axios.get("http://localhost:8000/api/task/tasks", detail.email);
        if (res) {
            dispatch(getAllTaskSuccess(res.data));
        } else {
            dispatch(getAllTaskFailure());
        }
    } catch (err) {
        dispatch(getAllTaskFailure());
    }
}


export const arrowClick = async (item, dir) => {
    // console.log(item);
    // console.log(dir);
    const data = {
        id: item._id,
        status: item.status,
        dir,
    };
    try {
        const res = await axios.patch(`http://localhost:8000/api/task/${data.id}`, data);
        if (res) {
            window.location.reload();
        }
    } catch (err) {
        console.log(err);
    }
}

export const deleteTask = async (dispatch, id) => {
    // console.log(id);

    const res = await axios.delete(`http://localhost:8000/api/task/delete/${id}`);
    // console.log("reached");
    if (res) {
        dispatch(deleteTaskSuccess());
        window.location.reload();
    } else {
        dispatch(deleteTaskFailure());
    }

}
