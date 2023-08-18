import Todo from "../models/todo";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      <button className="px-2 btn btn-outline-danger">Delete</button>
    </ul>
  );
}
