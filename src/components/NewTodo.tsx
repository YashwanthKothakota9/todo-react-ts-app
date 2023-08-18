import React, { useState } from "react";

interface NewTodoProps {
  onAddTodo: (title: string) => void;
}

function NewTodo({ onAddTodo }: NewTodoProps) {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title" className="form-label">
        Enter the new Todo to add to list
      </label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        className="form-control"
      ></input>
      <button type="submit" className="my-4 btn btn-primary">
        Add Todo
      </button>
    </form>
  );
}

export default NewTodo;
