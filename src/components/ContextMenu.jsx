const ContextMenu = ({ x, y, todo, onEdit, onDelete, onToggle }) => {
  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      <ul>
        <li onClick={() => onEdit(todo)}>Edit</li>
        <li onClick={() => onDelete(todo.id)}>Delete</li>
        <li onClick={() => onToggle(todo.id)}>
          {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu
