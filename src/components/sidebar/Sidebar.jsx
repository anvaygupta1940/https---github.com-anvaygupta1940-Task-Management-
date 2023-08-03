import React from 'react'
import "./Sidebar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const { currentUser } = useSelector(state => state.auth);
    return (
        <div className='sidebar'>
            <div className='wrapper'>
                <ul>
                    <li style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{currentUser.username}</li>
                    <li>
                        <Link to="/dashboard" style={{ textDecoration: "none", color: "black" }}>Dashboard</Link>
                    </li>
                    <li><Link to="/" style={{ textDecoration: "none", color: "black" }}>Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
