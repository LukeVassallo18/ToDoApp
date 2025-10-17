import TodoList from './Components/TodoList/TodoList';
import AddTodoForm from './Components/AddTodoForm/AddtodoForm';
import type { Todo } from './types/todo';
import React, { useState } from 'react';
import styles from './App.module.css';
// Main App Component - manages state and renders other components
const ToDoApp: React.FC = () => {

  // State to hold the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    // Create a new todo item
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText
    }
    // Update the todos state with the new todo using functional update
    setTodos(prev => [...prev, newTodo]);
  }

  const deleteTodo = (id: number) => {
    // Type the callback parameter to avoid implicit any
    setTodos(prev => prev.filter((todo: Todo) => todo.id !== id));
  }

  return(
    // Render the main application UI
    <div className={styles.App}>
      <h1 className={styles.header}>My Awesome To Do App</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      <div className={styles.todoCount}>Total To Dos: {todos.length}</div>
    </div>
  )
}

export default ToDoApp;
