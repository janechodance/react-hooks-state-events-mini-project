import React from "react";

function Task({task, category, handleDelete}) {
  return (
    <div id={task} className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button onClick={()=>handleDelete(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
