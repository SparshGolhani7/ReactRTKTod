import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTask,updateTask} from '../todo/todoSlice'

import { removeTask } from '../todo/todoSlice'
import { MdDelete } from "react-icons/md";

const AddTodo = () => {
  const [input,setInput] = useState("")
  const [editData,setEditData] = useState(false)
  const [inputId,setInputId]=useState(null)
  
  const dispatch = useDispatch();


  // let todos = JSON.parse(localStorage.getItem("todoTask"))||[];
  // console.log(todos,"tosos");
   let todos = useSelector((state)=>state.todos);


  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTask(input))
    console.log(input,"o/p");
    setInput('')
  }

  const addTodoHandlerUpdate = (e)=>{
     e.preventDefault()
    dispatch(updateTask({id:inputId,text:input}))
    // console.log(input,"i/p");
    setInput('')
     setEditData(false)
  }

  const updateData =(todo)=>{
    // dispatch(updateTask(todo.id));
    setEditData(true);
    setInput(todo.text);
    setInputId(todo.id)
  }

  return (
    <>
    {!editData?(<form onSubmit={addTodoHandler} >
    <input
      type="text"
      placeholder="enter task"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  <button type='submit'>Add todo</button>
  </form>):(
    <form onSubmit={addTodoHandlerUpdate} >
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  <button type='submit' >Update</button>
  </form>
  )}
   <div>TASKS</div>
      {todos.map((todo)=>(
        
        <li id={todo.id}> 
        <span>{todo.text}
            </span> 
            <button  onClick={()=>updateData(todo)}>Update</button>
            <button onClick={()=>dispatch(removeTask(todo.id))} style={{color:"red"}}><MdDelete /></button>         
             </li>
))}    
  </>
)
  
}

export default AddTodo

// will change name of commit





