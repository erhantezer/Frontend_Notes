//! rxreducer

import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
   todoList:[
    {
        id:new Date().getTime(),
        text:"Work on Redux",
        isDone:true
    }
    
    
   ]
}


const todoReducer =(state = initialState, { type, payload }) => {
   
  switch (type) {

  case ADD_TODO:
    return {
        todoList:[...state.todoList,{id:new Date().getTime(),text:payload, isDone:false}] 
     }
  case TOGGLE_TODO:
    return { ...state, ...payload }
  case DELETE_TODO:
    const newTodos =state.todoList.filter((item)=>item.id !== payload.id)
    return { 
        // ...state,
        // todoList:newTodos
        
      

       
     }
  case CLEAR_TODO:
    return initialState

  default:
    return state
  }
}

export default todoReducer;
