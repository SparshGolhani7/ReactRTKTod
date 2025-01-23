import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1,text:"First Task"}],
    updateId:null,
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
            console.log("jsj",taskToUpdate.text);
           }
            
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
       return{
        ...state,
        todos:state.todos.filter((todo)=>todo.id !==action.payload)
       } 

        },
    },

});

export const {addTask,updateTask,removeTask} = todoSlice.actions
export default todoSlice.reducer


