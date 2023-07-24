import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LoginIcon from '@mui/icons-material/Login';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Todolist from "./component/Todolist";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { Route, Routes, Link} from "react-router-dom";


function App() {
  return(
    <>
    <nav>
      <ul>
        <li className="nav-todo"> <Link to="/todo"> <AppShortcutIcon/> TodoApp</Link> </li>
        <li className="nav-todo"> <Link to="/signup"> <HowToRegIcon/>SignUp</Link></li>
        <li className="nav-todo"> <Link to="/"><LoginIcon/>Login</Link> </li>
      </ul>
    </nav>
      <Routes>
      <Route path="/todo" element={<Todolist/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>  
      </Routes>
    </>
  )
}

export default App;


