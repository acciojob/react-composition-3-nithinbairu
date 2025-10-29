import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  // Clone the child element and inject props directly into it
  return React.cloneElement(children, {
    className: "tooltip",
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
