import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: "todo",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },

    editTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
      saveToLocalStorage(state);
    },

    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
    
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveToLocalStorage(state);
    },
    reorderTodo: (state, action) => {
      return action.payload;
    },
   
  },
});

export const { addTodo, editTodo, deleteTodo, toggleTodo, reorderTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
