import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <TodoList todos={} />
    </div>
  );
}

export default App;
