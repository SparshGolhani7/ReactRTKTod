import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTask,updateTask} from '../todo/todoSlice'

const AddTodo = ({editData,setEditData,input,setInput}) => {
  
 
  const dispatch = useDispatch();

  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTask(input))
    console.log(input,"o/p");
    setInput('')
  }

  const addTodoHandlerUpdate = (e)=>{
     e.preventDefault()
    dispatch(updateTask(input))
    console.log(input,"i/p");
    setInput('')
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

  <button type='submit'onClick={()=>setEditData(false)} >Update</button>

  
  </form>
  )}
    

  </>
)
  
}

export default AddTodo
