import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text="Tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="Tooltip for another heading">
        <h2>Hover over another heading</h2>
      </Tooltip>
    </div>
  );
};

export default App;
