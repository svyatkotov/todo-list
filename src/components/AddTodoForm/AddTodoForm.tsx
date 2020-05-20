import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./AddTodoForm.css";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <form className="todo-form">
            <input className="todo-form__input" type='text' value={newTodo} onChange={handleChange}/>
            <button className="todo-form__button" type='submit' onClick={handleSubmit}>Add Todo</button>
        </form>
    );
};
