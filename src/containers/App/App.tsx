import React, { useState } from 'react';
import { TodoList } from '../../components/TodoList/TodoList';
import { AddTodoForm } from '../../components/AddTodoForm/AddTodoForm';
import "./App.css";

const initialTodos: Array<Todo> = [];

export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' && 
      setTodos([...todos, {text: newTodo, complete: false}]);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};
