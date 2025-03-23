const ToolTip = ({ text, x, y }) => {
  return (
    <div className="tooltip" style={{ top: y, left: x }}>
      {text}
    </div>
  );
};

export default ToolTip