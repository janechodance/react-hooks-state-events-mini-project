import React , {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [deleteTask, setDeleteTask]= useState("")
  const [tasksToDisplay, setTasksToDisplay]= useState(TASKS)
  function setNewDisplay(){
    setTasksToDisplay((currentTasksToDisplay)=>currentTasksToDisplay.filter(task=> task.text!==deleteTask))
    }
  
  function handleDelete(task){
    setDeleteTask(task)  
    setNewDisplay()
  }
 
  console.log(tasksToDisplay)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList TASKS={tasksToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
