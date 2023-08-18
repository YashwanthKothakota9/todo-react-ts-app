import Todo from "../models/todo";

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: number) => void;
}

export default function TodoList({ todos, onRemoveTodo }: TodoListProps) {
  return (
    <ul className="list-group border border-black">
      {todos.map((todo) => (
        <li className="list-group-item border border-black" key={todo.id}>
          <div className="d-flex justify-content-between">
            <span className="fs-5 fst-italic">{todo.title}</span>
            <button
              onClick={() => onRemoveTodo(todo.id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
