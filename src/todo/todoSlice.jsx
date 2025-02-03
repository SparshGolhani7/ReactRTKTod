import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    // todos:[{id:1,text:"First Task"}],
    
    todos:JSON.parse(localStorage.getItem("todoTask"))||[],
    // updateId:null,
};

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            const todo= {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
            localStorage.setItem("todoTask",JSON.stringify(state.todos))
        },
        

        // updateTask:(state,action)=>{
        //     state.todos.map((todo)=>{
        //     // const updatedText = todo.text;
        //    if(todo.id===action.payload.id){
        //     console.log(action,"act");
        //     state.updateId = todo.id
        // //  todo.text =action.payload.text
        // //   const updatedText = todo.text;
        // // return {
        // //     ...todo,
        // //     text:action.payload.text,
        // // };  
        //  } 

        
        updateTask:(state,action)=>{
            console.log("new",action);
           const {id,text} = action.payload;

           const taskToUpdate= state.todos.find((todo)=>todo.id===id)
           if(taskToUpdate){
            taskToUpdate.text =text;
            console.log("updateTask",taskToUpdate.text);
           }

           localStorage.setItem("todoTask",JSON.stringify(state.todos))
            
         } ,



        //  return todo     
            //     if(todo.id===state.updateId){
            //         // todo.text = action.payload
                    
            //         console.log("finalUpdate",action.payload);
            //     }      
            //     return todo;   



        //     })
        // },
        removeTask:(state,action)=>{
        //    state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
    //    return{
    //     ...state,
    //     todos:state.todos.filter((todo)=>todo.id !==action.payload)
    //    // localStorage.setItem("todoTask",JSON.stringify(state.todos))
    //    }

    const updatedState = {
        ...state,
        todos:state.todos.filter((todo)=>todo.id !==action.payload)
    };
    localStorage.setItem("todoTask",JSON.stringify(updatedState.todos));
    return updatedState;
          },
        
    },
    


});

export const {addTask,updateTask,removeTask} = todoSlice.actions
export default todoSlice.reducer


