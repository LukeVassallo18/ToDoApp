import React, {useState} from "react";
import type { AddTodoFormProps } from "../../types/todo";
import styles from './AddTodoForm.module.css';

// addTodo Form Component - form to add new to-do items
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

    function handleSubmit(buttonClick: React.FormEvent<HTMLFormElement>) {
        // Prevent the default form submission behavior
        buttonClick.preventDefault();
        // Avoid adding empty todos
        if (inputValue.trim() === '') return;
        // Call the onAddTodo prop with the input value and priority
        onAddTodo(inputValue.trim(), priority);
        // Clear the input field after submission
        setInputValue('');
        // Reset priority to medium
        setPriority('medium');
    }

  return(
    <form className={styles.form} onSubmit={handleSubmit}>
        
      <input type="text" placeholder='Add a new task...' className={styles.input} 
      value={inputValue} onChange={(buttonClick) => 
      setInputValue(buttonClick.target.value)} />

      <select 
        className={styles.prioritySelect}
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
      >
        <option value="low">🟢 Low</option>
        <option value="medium">🟡 Medium</option>
        <option value="high">🔴 High</option>
      </select>

      <button type='submit' className={styles.submitButton}>
        <i className="fas fa-plus"></i>
        Add
      </button>
    </form>
  )
}

export default AddTodoForm;
