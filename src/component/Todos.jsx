import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTask,updateTask } from '../todo/todoSlice'
import { MdDelete } from "react-icons/md";


const Todos = ({editData,setEditData,setInput}) => {
   const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    const updateData =(todo)=>{
      dispatch(updateTask(todo));
      setEditData(true);
      setInput(todo.text);
    }
  return (
    <>
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

export default Todos
