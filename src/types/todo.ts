export interface Todo {
  id: number;
  text: string;
}

export interface TodoItemProps{
    todo: Todo;
    // defining the type using semicolon
    onDelete: (id:number) => void;
}

export interface TodoListProps{
    todos: Todo[];
    onDeleteTodo: (id:number) => void;
}

export interface AddTodoFormProps{
    onAddTodo: (text:string) => void;
}

