import React, { useState } from 'react'
import "./Registration.scss";
import { login } from '../../redux/apiCalls';
import { useDispatch } from "react-redux";

const SignIn = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
        console.log("Login function called ..");
    }
    return (
        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <input type='email' placeholder='Enter email' onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type='password' placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
