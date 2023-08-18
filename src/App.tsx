import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import todoService from "./services/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    setTodos(await todoService.getTodos());
  };

  const deleteTodo = async (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = async (title: string) => {
    const newTodo = await todoService.addTodo(title);
    setTodos([newTodo, ...todos]);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={deleteTodo} />
    </div>
  );
}

export default App;
