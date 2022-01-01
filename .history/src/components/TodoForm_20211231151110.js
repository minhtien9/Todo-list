import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handlerSubmit = (event) => {
        event.preventDefault()
    }

    const handlerChange = (event) => {}
    return (
        <form className='todo-form' onSubmit={handlerSubmit}>
            <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handlerChange}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm
