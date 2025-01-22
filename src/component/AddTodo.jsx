import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTask,updateTask} from '../todo/todoSlice'

const AddTodo = () => {
  const [input,setInput] = useState("")
  const [editData,setEditData] = useState(false)
  const dispatch = useDispatch();

  const addTodoHandler = (e)=>{
    e.preventDefault()
    dispatch(addTask(input))
    setInput('')
  }

  const addTodoHandlerUpdate = (e)=>{
    e.preventDefault()
    dispatch(updateTask(input))
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

  <button type='submit'>Update</button>

  
  </form>
  )}
    

  </>
)
  
}

export default AddTodo
