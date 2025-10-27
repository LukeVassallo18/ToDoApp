import React, {useState} from "react";
import type { TodoItemProps } from "../../types/todo";
import styles from './Todoitem.module.css'

// To Do Item Component - displays individual to-do items with a delete button
const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, onEdit}) => {

  // create a variable called isEditing that remembers if we are currently editing. Right now it is false.
  // setIsEditing is the function we will be using to change the value of the current text
  const [isEditing, setIsEditing] = useState(false);

  // create a variable called editedText that stores what the user is typing. 
  // setEditedText is the function we will be using to update the edited text.
  const [editedText, setEditedText] = useState(todo.text);

  // Get priority icon
  const getPriorityIcon = () => {
    switch (todo.priority) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
      default:
        return '⚪';
    }
  };

  // when the user wants to save
  const handleSave = () => {
    // if the text is not empty
    if (editedText.trim()) {
      // tell the parent component to update this todo (TodoItem --> ToDoList --> App.tsx)
      onEdit(todo.id, editedText.trim());
      // turn off edit mode
      setIsEditing(false);
    }
  };

  // when the user canceles editing
  const handleCancel = () => {
    // reset the text back to the original
    setEditedText(todo.text);
    // turn of edit mode
    setIsEditing(false);
  };


  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>

      <div className={styles.todoContent}>

        <span className={styles.priorityBadge}>{getPriorityIcon()}</span>
        <input type="checkbox" className={styles.checkbox} onChange={() => onToggle(todo.id)} checked={todo.completed} />
        {/* This part or this part 

            If isEditing is true (meaning the user is in edit mode), show the FIRST part, otherwise show the SECOND part

            onChange is being updated everytime the user types
            target.value is what the user just type

            onBlur is when the user clicks away from the input box, save automatically

            
        */}
        { isEditing ? (
          <input type="text"
          value={editedText} 
          onChange={(editingAction) => setEditedText(editingAction.target.value)}
          onBlur={handleSave}
          onKeyDown={(editingAction) => {
            if (editingAction.key === 'Enter') {
              handleSave();
            } else if (editingAction.key === 'Escape') {
              handleCancel();
            }
          }}
          className={styles.editInput}
          autoFocus/> 
           
        ): (<span className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`} onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>)}
      </div>

      <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
        <i className="fas fa-trash"></i>
        Delete
      </button>
       
    </div>
  );
}

export default TodoItem;