import { MdCancel, MdDelete, MdEditSquare, MdSave } from "react-icons/md";
import "../style/todoList.css";

const TodoItem = ({
  todo,
  index,
  editId,
  setEditId,
  setEditText,
  editText,
  onEditClick,
  onSaveEdit,
  onDelete,
  onToggle,
  onDragStart,
  onDrop,
  onContextMenu,
  color,
  showTooltip,
  hideTooltip,
}) => {
  return (
    <div
      className="todo-item"
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(index)}
      onContextMenu={(event) => onContextMenu(event, todo)}
      style={{ backgroundColor: color }}
    >
      <div className="todo-content">
        <div
          className={`circle-checkbox ${todo.completed ? "checked" : ""}`}
          onClick={() => onToggle(todo.id)}
        ></div>

        {editId === todo.id ? (
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <li
            className="todo-text"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </li>
        )}
      </div>

      <div className="todo-buttons">
        {editId === todo.id ? (
          <>
            <button
              onClick={() => onSaveEdit(todo.id, todo.text)}
              onMouseEnter={(e) => showTooltip("Save Todo", e)}
              onMouseLeave={hideTooltip}
            >
              <MdSave color="#1c6f3ef9" className="icon" />
            </button>
            <button
              onClick={() => setEditId(null)}
              onMouseEnter={(e) => showTooltip("Cancel", e)}
              onMouseLeave={hideTooltip}
            >
              <MdCancel color="#fa4554fa" className="icon" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onEditClick(todo)}
              onMouseEnter={(e) => showTooltip("Edit Task", e)}
              onMouseLeave={hideTooltip}
            >
              <MdEditSquare color="#007bff" className="icon" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              onMouseEnter={(e) => showTooltip("Delete Todo", e)}
              onMouseLeave={hideTooltip}
            >
              <MdDelete color="#fa4554fa" className="icon" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
