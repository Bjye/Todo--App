import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
import { AddTodoAction, RemoveTodoAction } from '../actions/TodoActions';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



export default function Todolist(){


    const [todo, setTodo] = useState();

    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo);
    const {todos} = Todo;
  
    const handleSubmit = (e)=> {
      e.preventDefault();
      dispatch(AddTodoAction(todo));
    }
   const removeHandler=(t)=>{
    dispatch(RemoveTodoAction(t))
   };

    return (
        <div className="todo-body">
          <div className="Appp">
            {/* <header className="App-header"> */}
            <div className="headingg">
              <h2 className="heading-h2">Todo app</h2> 
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text"  className='form-input' onChange={(e)=>setTodo (e.target.value)}  placeholder="Add todo.."/>
                <button type="submit" className='form-button'><span> <AddCircleOutlineIcon/></span></button>
              </form>
      
              <ul className='all-todos'>
               {
                todos && todos.map((t) => (
                  <li  key={t.id} className='single-todo'>
                  <span className='todo-Text'>{t.todo}</span>
                <button  onClick={()=>removeHandler(t)} className="todo-delete"> <DeleteIcon/></button>
                </li>
                
              ))
                } 
               
              </ul>
            {/* </header> */}  
          </div>
          </div>
        );
}