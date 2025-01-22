import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import {useState} from 'react'

function App() {

  const [editData,setEditData] = useState(false)
  const [input,setInput] = useState("")
  

  return (
    <>
      <AddTodo editData={editData} setEditData={setEditData} input={input} setInput={setInput}/>
      <Todos editData={editData} setEditData={setEditData} input={input} setInput={setInput}/>
    </>
  )
}

export default App
