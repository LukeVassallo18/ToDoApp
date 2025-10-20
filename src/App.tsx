import TodoList from './Components/TodoList/TodoList';
import AddTodoForm from './Components/AddTodoForm/AddtodoForm';
import type { Todo } from './types/todo';
import React, { useState } from 'react';
import styles from './App.module.css';
// Main App Component - manages state and renders other components
// FC stands for Functional Component
// we do this to type the component correctly in TypeScript
const ToDoApp: React.FC = () => {

  // State to hold the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    // Create a new todo item
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    }
    // Update the todos state with the new todo using functional update
    // using spread operator which spreads all existing todos into a new array
    // This is needed by react to update the state
    setTodos(prev => [...prev, newTodo]);
  }

  const deleteTodo = (id: number) => {
    // Type the callback parameter to avoid implicit any
    setTodos(prev => prev.filter((todo: Todo) => todo.id !== id));
  }

  // Toggle the completed status of a todo
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? {... todo, completed: !todo.completed} : todo)))
  }

  // Edit a todo's text
  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, text: newText} : todo)))
  }

  return(
    // Render the main application UI
    <div className={styles.App}>
      <h1 className={styles.header}>My Awesome To Do App</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} onEditTodo={editTodo} />
      <div className={styles.todoCount}>Total To Dos: {todos.length}</div>
    </div>
  )
}

export default ToDoApp;
