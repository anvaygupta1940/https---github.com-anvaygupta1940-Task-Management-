import React from 'react'
import "./Dashboard.scss";
import Sidebar from '../../components/sidebar/Sidebar'
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='left'>
                <Sidebar></Sidebar>
            </div>
            <div className='right'>
                <h1>Task Status Dashboard</h1>
                <div className='statusBoxes'>
                    <div className='todo box'>ToDo</div>
                    <div className='doing box'>Doing</div>
                    <div className='done box'>Done</div>
                </div>
                <Link to="/taskManager" className='button' style={{ textDecoration: "none" }}>Create Task</Link>
            </div>
        </div>
    )
}

export default Dashboard
