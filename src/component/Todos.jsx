import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTask,updateTask } from '../todo/todoSlice'
import { MdDelete } from "react-icons/md";


const Todos = ({editData,setEditData,setInput}) => {
   const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    const updateData =(a,b)=>{
      dispatch(updateTask(a));
      setEditData(true);
      setInput(b);
    }
  return (
    <>
      <div>TASKS</div>
      {todos.map((todo)=>(
        
        <li id={todo.id}> 
        <span>{todo.text}
            </span> 
            <button  onClick={()=>updateData(todo.id,todo.text)}>Update</button>
            <button onClick={()=>dispatch(removeTask(todo.id))} style={{color:"red"}}><MdDelete /></button>         
             </li>
))}
    </>
  )
}

export default Todos
