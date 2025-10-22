import React, {useState} from "react";
import type { AddTodoFormProps } from "../../types/todo";
import styles from './AddTodoForm.module.css';

// addTodo Form Component - form to add new to-do items
const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');

    function handleSubmit(buttonClick: React.FormEvent<HTMLFormElement>) {
        // Prevent the default form submission behavior
        buttonClick.preventDefault();
        // Avoid adding empty todos
        if (inputValue.trim() === '') return;
        // Call the onAddTodo prop with the input value
        onAddTodo(inputValue.trim());
        // Clear the input field after submission
        setInputValue('');
    }

  return(
    <form className={styles.form} onSubmit={handleSubmit}>
        
      <input type="text" placeholder='Add a new task...' className={styles.input} 
      value={inputValue} onChange={(buttonClick) => 
      setInputValue(buttonClick.target.value)} />

      <button type='submit' className={styles.submitButton}>
        <i className="fas fa-plus"></i>
        Add
      </button>
    </form>
  )
}

export default AddTodoForm;
