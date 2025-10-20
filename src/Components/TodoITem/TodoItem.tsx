import React, { useState } from "react";
import type { TodoItemProps } from "../../types/todo";
import styles from './Todoitem.module.css'

// To Do Item Component - displays individual to-do items with a delete button
const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, onEdit}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {};

  const handleCancelEdit = () => {};

  const handleKeyDown = () => {};

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.todoContent}>
      <input type="checkbox" className={styles.checkbox} onChange={() => onToggle(todo.id)} checked={todo.completed} />
      <span className={`${styles.todoText} 
      ${todo.completed ? styles.completed : ''}`} onDoubleClick={handleDoubleClick}>{todo.text}</span>
      </div>
      <button  className={styles.deleteButton}
       onClick={() => onDelete(todo.id)}>Delete</button>
       
    </div>
  );
}

export default TodoItem;