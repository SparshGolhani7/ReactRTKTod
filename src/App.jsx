import './App.css'
import AddTodo from './component/AddTodo'
// import Todos from './component/Todos'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<AddTodo/>}></Route>
    </Routes>
    </BrowserRouter>
      

      {/* <Todos/> */}
    </>
  )
}

export default App
