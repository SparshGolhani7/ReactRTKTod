import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTask,updateTask } from '../todo/todoSlice'
import { MdDelete } from "react-icons/md";


const Todos = () => {
   const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
  return (
    <>
      <div>TASKS</div>
      {todos.map((todo)=>(
        
        <li id={todo.id}> 
        <span>{todo.text}
            </span> 
            <button onClick={()=>dispatch(updateTask(todo.id))}>Update</button>
            <button onClick={()=>dispatch(removeTask(todo.id))} style={{color:"red"}}><MdDelete /></button>         
             </li>
))}
    </>
  )
}

export default Todos
