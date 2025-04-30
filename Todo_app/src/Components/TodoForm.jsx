import React, { useEffect, useState, useRef } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        props.onSubmit({
            id: props.edit ? props.edit.id : Math.floor(Math.random() * 1000),
            text: input.trim(),
        });

        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input 
                        placeholder='Update your item' 
                        value={input} 
                        onChange={handleChange} 
                        name='text' 
                        ref={inputRef}
                        className='todo-input edit' 
                    />
                    <button className='todo-button edit'>Update</button>
                </>   
            ) : (
                <>
                    <input 
                        placeholder='Add a Todo' 
                        value={input} 
                        onChange={handleChange} 
                        name='text' 
                        className='todo-input'
                        ref={inputRef}
                    />
                    <button className='todo-button'>Add Todo</button>
                </>
            )}
        </form>
    );
};

export default TodoForm;
