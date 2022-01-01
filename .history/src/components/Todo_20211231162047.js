import React, { useState } from 'react'

import TodoForm from './TodoForm'
const Todo = () => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })
    return todos.map((todo, index) => (
        <div className={todo.isCompleted ? 'todo-row complete' : 'todo'}></div>
    ))
}

export default Todo
