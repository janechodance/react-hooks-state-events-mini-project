import React from "react";
import { findDOMNode } from "react-dom";
import Task from "./Task";
function TaskList({Tasks, handleDelete}) {
  console.log(Tasks)
  const taskList = Tasks.map((task)=> 
  <li key={task.text}>
    <Task task={task.text} category={task.category} handleDelete={handleDelete} />
  </li>)

  return (
    <div className="tasks">
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskList;
