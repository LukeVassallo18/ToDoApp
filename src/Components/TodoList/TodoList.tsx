import type { TodoListProps } from "../../types/todo";
import TodoItem from "../TodoITem/TodoItem";
import styles from "./TodoList.module.css"

// To Do List Component - displays a list of to-do items
const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <div className={styles.todoList}>
      {todos.length === 0 ? 
      (<p className={styles.emptyMessage}>No to-dos available</p>) : 
      (todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
