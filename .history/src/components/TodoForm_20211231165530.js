import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

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
        <form className='todo-form' onSubmit={handlerSubmit}> {props.edit?(
          <div>
 <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handlerChange}
                ref={inputRef}
            />
            <button className='todo-button'>Add todo</button>
          </div>
        )(
          <button>
            <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handlerChange}
                ref={inputRef}
            />
            <button className='todo-button'>Add todo</button>
          </button>
        )
           
        </form>
    )
}

export default TodoForm
