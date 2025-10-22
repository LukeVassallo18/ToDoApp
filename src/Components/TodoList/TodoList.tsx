import type { TodoListProps } from "../../types/todo";
import TodoItem from "../TodoITem/TodoItem";
import styles from "./TodoList.module.css"


// To Do List Component - displays a list of to-do items
const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleTodo, onEditTodo, filter }) => {
  
  // Get the appropriate empty message based on the filter
  const getEmptyMessage = () => {
    switch (filter) {
      case 'completed':
        return {
          icon: 'fas fa-clipboard-check',
          text: "You haven't completed any todos yet"
        };
      case 'active':
        return {
          icon: 'fas fa-check-double',
          text: "All done! No active todos"
        };
      default:
        return {
          icon: 'fas fa-inbox',
          text: "No todos yet. Add one to get started!"
        };
    }
  };

  const emptyMessage = getEmptyMessage();

  return (
    <div className={styles.todoList}>
      {/* if there are no todos show the empty message */}
      {todos.length === 0 ? (
        <p className={styles.emptyMessage}>
          <i className={emptyMessage.icon}></i>
          <span>{emptyMessage.text}</span>
        </p>
      ) : (
        todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} onToggle={onToggleTodo} onEdit={onEditTodo}/>
        ))
      )}
    </div>
  );
}

export default TodoList;
