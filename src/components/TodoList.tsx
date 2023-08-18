import Todo from "../models/todo";

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: number) => void;
}

export default function TodoList({ todos, onRemoveTodo }: TodoListProps) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="mx-2 list-group-item" key={todo.id}>
          {todo.title}
          <button
            onClick={() => onRemoveTodo(todo.id)}
            className="mx-5 btn btn-outline-danger"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
