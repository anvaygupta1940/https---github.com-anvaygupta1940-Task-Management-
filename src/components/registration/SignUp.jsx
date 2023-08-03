import React, { useState } from 'react'
import "./Registration.scss";
import { register } from '../../redux/apiCalls';
import { useDispatch } from "react-redux";


const SignUp = () => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(dispatch, { username, email, password });
        console.log("Sign Up function called");
    }
    return (
        <div className='container'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <input type='text' placeholder='Enter username' onChange={(e) => { setUsername(e.target.value) }}></input>
                    <input type='email' placeholder='Enter email' onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type='password' placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
