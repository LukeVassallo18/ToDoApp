import React from "react";
import type { TodoItemProps } from "../../types/todo";
import styles from './Todoitem.module.css'

// To Do Item Component - displays individual to-do items with a delete button
const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.todoContent}>
      <input type="checkbox" name=""  className={styles.checkbox} onChange={() => onToggle(todo.id)} checked={todo.completed} />
      <span className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>{todo.text}</span>
      </div>
      <button  className={styles.deleteButton}
       onClick={() => onDelete(todo.id)}>Delete</button>
       
    </div>
  );
}

export default TodoItem;