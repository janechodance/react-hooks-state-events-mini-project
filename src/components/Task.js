import React from "react";

function Task({text, category, handleDelete}) {
  return (
    <div id={text} className="task">
      <div className="category">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>handleDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
