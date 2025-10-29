
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tooltip" >
          <button>Hover over me</button>
        </Tooltip>
        <br></br>
        <Tooltip text="This is another tooltip" >
          <button>Hover over me to see another tooltip</button>
        </Tooltip>
    </div>
  )
}

export default App
