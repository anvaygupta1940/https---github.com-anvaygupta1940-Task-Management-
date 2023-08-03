import React from 'react'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/registration/SignUp'
import SignIn from './components/registration/SingIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard';
import TaskManager from './pages/task/TaskManager.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signIn' element={<SignIn></SignIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/taskmanager' element={<TaskManager></TaskManager>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
