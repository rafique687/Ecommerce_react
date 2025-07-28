import { useState } from "react";

function Box(props) {
  const [display, setDisplay] = useState("block");

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin: "5px",
    float: "left",
    width: "200px", 
  };

  function hidebox(id) {
    setDisplay(prevDisplay => (prevDisplay === "none" ? "block" : "none"));
  }

  return (
    <div style={mystyle}>
      <h1 onClick={() => hidebox(props.id)}>{props.heading}</h1>
      <div
        className="content"
        id={props.id}
        style={{ display: display }}
      >
        {props.content}
      </div>
    </div>
  );
}

export default Box;
