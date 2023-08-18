import Todo from "../models/todo";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
