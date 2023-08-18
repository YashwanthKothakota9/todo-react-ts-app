import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import todoService from "./services/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    setTodos(await todoService.getTodos());
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
