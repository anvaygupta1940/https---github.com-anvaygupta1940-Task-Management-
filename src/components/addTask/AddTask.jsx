import React, { useState } from 'react'
import "./AddTask.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from '../../redux/apiCalls';

const AddTask = () => {
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(dispatch, { title, desc, email: currentUser.email });
        console.log("add task function called");
    }
    return (
        <div className='addTask'>
            <form onSubmit={handleSubmit}>
                <div className='input_fields'>
                    <input type='text' placeholder='Enter title of Task' onChange={(e) => { setTitle(e.target.value) }}></input>
                    <input type='text' placeholder='Enter description about task' onChange={(e) => { setDesc(e.target.value) }}></input>
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask
