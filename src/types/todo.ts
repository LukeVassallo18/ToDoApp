export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoItemProps{
    todo: Todo;
    // defining the type using semicolon
    onDelete: (id:number) => void;
    onToggle: (id:number) => void;
}

export interface TodoListProps{
    todos: Todo[];
    onDeleteTodo: (id:number) => void;
    onToggleTodo: (id:number) => void;
}

export interface AddTodoFormProps{
    onAddTodo: (text:string) => void;
}

