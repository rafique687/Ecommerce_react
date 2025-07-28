import { useState } from "react";
const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      margin : "5px",
      float : "left",
      widht :"200px",
      

    };

function Box(data) { console.log();
 // const Style={border:2px solid #000; float:left;}
 function hidebox(id)
 {
  console.log(id);
 }
  return (
    <>
      <div style={mystyle} onClick={(e)=>hidebox(e.target)}>
        <h1 id={data.id} onClick={hidebox(data.id)}</h1>
        <div className="content" id={data.id}>
            {data.content}
        </div>
     
      </div>
     
     
    </>
  );
}

export default Box;
