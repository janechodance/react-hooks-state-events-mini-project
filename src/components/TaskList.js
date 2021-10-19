import React from "react";
import { findDOMNode } from "react-dom";
import Task from "./Task";
function TaskList({tasks, handleDelete}) {
  const taskList = tasks.map((task)=> 
  <li key={task.text}>
    <Task text={task.text} category={task.category} handleDelete={handleDelete} />
  </li>)

  return (
    <div className="tasks">
      <ul>{taskList}</ul>
    </div>
  );
}

export default TaskList;
