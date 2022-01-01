import React, { useState } from 'react'

import TodoForm from './TodoForm'
const TodoList =() =>{
    const [todos, setTodos] = useState('')

    const addTodo=todo=>{
if(!todo.text.trim().length===0){
return
}
    
    return <div></div>
}

export default TodoList
