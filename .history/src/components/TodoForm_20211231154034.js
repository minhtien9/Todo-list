import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handlerChange = (event) => {
        setInput(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        setInput('')
    }
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
