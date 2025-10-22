import TodoList from './Components/TodoList/TodoList';
import AddTodoForm from './Components/AddTodoForm/AddtodoForm';
import type { Todo } from './types/todo';
import React, { useState } from 'react';
import styles from './App.module.css';
// Main App Component - manages state and renders other components
// FC stands for Functional Component
// we do this to type the component correctly in TypeScript
const ToDoApp: React.FC = () => {

  // State to hold the list of todos because each time a todo is created, deleted or edited, the state has to change
  const [todos, setTodos] = useState<Todo[]>([]);

  // State to hold the current filter
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');


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
    // map is like a for loop that returns a new array
    // first we check if the todo id matches the id passed
    // if it matches we create a new todo object with the completed status toggled
    // else we return the todo as is
    setTodos(todos.map(todo => (todo.id === id ? {... todo, completed: !todo.completed} : todo)))
  }

  // create a funciton called editTodo, Then it needs 2 paramaters, which todo to edit and what the new text is
  const editTodo = (id: number, editedText: string) => {
    // update the todos list. prev is the current list of todos, .map() goes through each todo one by one
    setTodos(prev => prev.map(todo => 
      // this is called a ternary operator, an if/else shorthand
      todo.id === id 
        ? {...todo, text: editedText} 
        : todo
    ));
  };


  // create a function that takes the full todo list and add a filter type
  const filteredTodos = (todos: Todo[], filter: 'all' | 'active' | 'completed'): Todo[] => {
    switch (filter) {
      // if the filter is active return only the todos that are not completed
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        // if the filter is completed return only the todos that are completed
        return todos.filter(todo => todo.completed);
      default:
        // if the filter is all return all todos
        return todos;
    }
  }

  const filteredTodoList = filteredTodos(todos, filter);
  const totalTodos = todos.length;
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return(
    // Render the main application UI
    <div className={styles.App}>
      <h1 className={styles.header}>
        <i className="fas fa-check-circle"></i> Todo
      </h1>
      {/* Input to add new tasks */}
      <AddTodoForm onAddTodo={addTodo} />
      {/* filtering buttons */}
      <div className={styles.filterButtons}>
        <button className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`} onClick={() => setFilter('all')}>
          <i className="fas fa-list"></i> All
        </button>
        <button className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`} onClick={() => setFilter('active')}>
          <i className="fas fa-clock"></i> Active
        </button>
        <button className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`} onClick={() => setFilter('completed')}>
          <i className="fas fa-check"></i> Completed
        </button>
      </div>
      {/* To Do List Component - displays the list of to-dos */}

      <TodoList todos={filteredTodoList} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} onEditTodo={editTodo} filter={filter} />

      <div className={styles.todoCount}>
        <i className="fas fa-chart-pie"></i> {totalTodos} Total · {activeTodos} Active · {completedTodos} Done
      </div>
    </div>
  )
}

export default ToDoApp;
