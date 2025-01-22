import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1,text:"First Task"}]
    
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
        },
        updateTask:(state,action)=>{
            state.todos.map((todo)=>{
            // const updatedText = todo.text;
           if(todo.id===action.payload){
            console.log("text",state,"action",action.payload,"i/p");
        //  todo.text =action.payload
        //   const updatedText = todo.text;
        // return {
        //     ...todo,
        //     text:action.payload,
        // };  
         } 
        //  return todo                         
            })
        },
        removeTask:(state,action)=>{
           state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        },
    },

});

export const {addTask,updateTask,removeTask} = todoSlice.actions
export default todoSlice.reducer