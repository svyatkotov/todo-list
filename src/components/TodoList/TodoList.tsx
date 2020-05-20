import React from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import "./TodoList.css";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => {
                return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>;
            })}
        </ul>
    );
};