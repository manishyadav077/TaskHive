import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, reorderTodo, toggleTodo } from "./redux/todoSlice";
import Tab from "./components/Tab";
import "./style/todoList.css";
import { showError, showSuccess } from "./redux/notificationSlice";
import TodoItem from "./components/TodoItem";
import ContextMenu from "./components/ContextMenu";
import ToolTip from "./components/ToolTip";
import { showTooltip, hideTooltip } from "./utils/tooltipUtils";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);
  const [filter, setFilter] = useState("incompleted");
  const [contextMenu, setContextMenu] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffccff", "#ffffcc"];

  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
    dispatch(showSuccess("Todo deleted successfully!"));
    if (todos.length === 1) {
      setTooltip(null);
    }
  };

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveEdit = (id, originalText) => {
    if (editText.trim() === "") {
      dispatch(showError("Todo cannot be empty!"));
    } else if (editText.trim() === originalText.trim()) {
      setEditId(null);
    } else {
      dispatch(editTodo({ id, text: editText }));
      setEditId(null);
      dispatch(showSuccess("Todo updated successfully!"));
    }
  };

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDrop = (index) => {
    if (draggedItem === null || draggedItem === index) return;

    const newTodos = [...todos];
    const [movedItem] = newTodos.splice(draggedItem, 1);
    newTodos.splice(index, 0, movedItem);

    dispatch(reorderTodo(newTodos));
    setDraggedItem(null);
  };

  const handleTodoToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleContextMenu = (event, todo) => {
    event.preventDefault();
    setContextMenu({
      x: event.pageX,
      y: event.pageY,
      todo,
    });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "completed" ? todo.completed : !todo.completed
  );

  return (
    <div className="todo-list-container" onClick={closeContextMenu}>
      <Tab setFilter={setFilter} />
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          editId={editId}
          setEditId={setEditId}
          editText={editText}
          setEditText={setEditText}
          onEditClick={handleEditClick}
          onSaveEdit={handleSaveEdit}
          onDelete={handleTodoDelete}
          onToggle={handleTodoToggle}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
          onContextMenu={handleContextMenu}
          color={colors[index % colors.length]}
          showTooltip={(text, e) => showTooltip(text, e, setTooltip)}
          hideTooltip={() => hideTooltip(setTooltip)}
        />
      ))}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          todo={contextMenu.todo}
          onEdit={handleEditClick}
          onDelete={handleTodoDelete}
          onToggle={handleTodoToggle}
        />
      )}
      {tooltip && <ToolTip text={tooltip.text} x={tooltip.x} y={tooltip.y} />}
    </div>
  );
};

export default TodoList;