import React from 'react'
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from '../../redux/authRedux';
import history from '../../history';

const Navbar = () => {
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(logoutSuccess());
        localStorage.removeItem("auth");
        history.push("/signin");
        window.location.reload();
    }

    return (
        <div className='navbar'>
            <h1>Task Manager</h1>
            <div className='buttons'>
                {currentUser && currentUser.accessToken ? (
                    <Link to="/signin" className="button" style={{ textDecoration: "none" }} onClick={handleClick}>
                        SignOut
                    </Link>
                ) :
                    <>
                        <Link to="/signin" className="button" style={{ textDecoration: "none" }}>
                            SignIn
                        </Link>
                        <Link to="/signup" className="button" style={{ textDecoration: "none" }}>
                            SignUp
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar
