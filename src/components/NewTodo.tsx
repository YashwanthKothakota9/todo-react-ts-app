import React, { useState } from "react";

function NewTodo() {
  const [title, setTitle] = useState("");

  return (
    <form>
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
