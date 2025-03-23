import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";
import "./App.css";
import { showSuccess, showWarning } from "./redux/notificationSlice";

const Todo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      dispatch(showWarning("Todo cannot be empty!"));
      return;
    }
    dispatch(addTodo({ id: Date.now(), text: input, completed: false }));
    dispatch(showSuccess("Todo added successfully!"));
    setInput(" ");
  };

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        type="text"
        value={input}
        placeholder="Enter your todo..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-todo-btn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default Todo;
