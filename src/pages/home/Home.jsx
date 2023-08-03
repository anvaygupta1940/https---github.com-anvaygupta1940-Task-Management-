import React from 'react'
import "./Home.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {
    const { currentUser } = useSelector(state => state.auth);

    return (
        <div className='home'>
            <div className='content'>
                <h1>Organize it all</h1>
                <p>with</p>
                <b>Task Manager</b>
                {currentUser && currentUser.accessToken ? (
                    <Link to="/dashboard" className="button" style={{ textDecoration: "none" }}>
                        Get started
                    </Link>
                ) :
                    <Link to="/signin" className="button" style={{ textDecoration: "none" }}>
                        Get started
                    </Link>
                }
            </div>
        </div>
    )
}

export default Home
