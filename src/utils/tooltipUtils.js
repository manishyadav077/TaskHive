export const showTooltip = (text, event, setTooltip) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      text,
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top - 10,
    });
  };
  
  export const hideTooltip = (setTooltip) => {
    setTooltip(null);
  };