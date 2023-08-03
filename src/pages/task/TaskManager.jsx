import React from 'react'
import "./TaskManager.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import AddTask from '../../components/addTask/AddTask';
import TaskList from '../../components/taskList/TaskList';

const TaskManager = () => {
    return (
        <div className='taskManager'>
            <div className='left'>
                <Sidebar></Sidebar>
            </div>
            <div className='right'>
                <AddTask></AddTask>
                <TaskList></TaskList>
            </div>
        </div>
    )
}

export default TaskManager
