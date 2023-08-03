import React, { useEffect } from 'react'
import "./TaskList.scss";
import { useSelector, useDispatch } from "react-redux";
import { getallTasks } from '../../redux/apiCalls';
import ListCard from '../listCard/ListCard';

const TaskList = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.auth);
    const { allTasks } = useSelector((state) => state.task);

    useEffect(() => {
        getallTasks(dispatch, { email: currentUser.email });

    }, [dispatch, currentUser.email]);
    return (
        <>
            <ul style={{ margin: "2rem 0" }}>
                <li>
                    <h3>Id</h3>
                </li>
                <li>
                    <h3>Title</h3>
                </li>
                <li>
                    <h3>Description</h3>
                </li>
                <li>
                    <h3>Status</h3>
                </li>
                <li>
                    <h3>Action</h3>
                </li>
            </ul>
            <div className='taskList'>
                {Object.values(allTasks).map((item) => {
                    return (
                        <ListCard key={item._id} item={item}></ListCard>
                    )
                })}
            </div>
        </>
    )
}

export default TaskList
