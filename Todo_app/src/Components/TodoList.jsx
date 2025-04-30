import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [{ ...todo, isComplete: false }, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    return (
        <>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos} 
                completeTodo={completeTodo} 
                removeTodo={removeTodo} 
                updateTodo={updateTodo} 
            />
        </>
    );
};

export default TodoList;
