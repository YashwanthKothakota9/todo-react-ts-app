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
      <label htmlFor="title" className="font-monospace fw-bold fs-2 form-label">
        Enter the new Todo to add to the list
      </label>
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        className="form-control border border-black"
      ></textarea>
      <button type="submit" className="mt-2 mb-3 btn btn-dark">
        Add Todo
      </button>
    </form>
  );
}

export default NewTodo;
