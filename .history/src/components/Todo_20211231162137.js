import React, { useState } from 'react'

import TodoForm from './TodoForm'
const Todo = () => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })
    return todos.map((todo, index) => (
        <div
            className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}
            key={index}
        ></div>
        <div className="icons">
          
        </div>
    ))
}

export default Todo
