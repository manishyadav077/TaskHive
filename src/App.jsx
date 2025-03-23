import React from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>
        TaskHive <span className="bee">🐝</span>
        <span className="tagline">- Buzz through your tasks with ease!</span>
      </h1>
      <Todo />
      <TodoList />
    </div>
  );
};

export default App;
