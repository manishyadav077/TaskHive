import React, { useState } from "react";
import "../style/tab.css";
import { useSelector } from "react-redux";

const Tab = ({ setFilter }) => {
  const todos = useSelector((state) => state.todo);
  const completedTodos = todos.filter((todo) => todo.completed);
  const inCompletedTodos = todos.filter((todo) => !todo.completed);

  const [activeButton, setActiveButton] = useState("incompleted");

  if (todos.length < 1) return null;

  return (
    <div className="tab-container">
      <button
        onClick={() => {
          setFilter("incompleted");
          setActiveButton("incompleted");
        }}
        className={activeButton === "incompleted" ? "active-blue" : ""}
      >
        Incompleted <span></span>({inCompletedTodos.length})
      </button>
      <button
        onClick={() => {
          setFilter("completed");
          setActiveButton("completed");
        }}
        className={activeButton === "completed" ? "active-green" : ""}
      >
        Completed <span></span>({completedTodos.length})
      </button>
    </div>
  );
};

export default Tab;
