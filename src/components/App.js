import React , {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  
  const [tasksToDisplay, setTasksToDisplay]= useState(TASKS)
 

  function handleDelete(deleteTask){
    setTasksToDisplay(tasksToDisplay.filter(task=> task.text!==deleteTask))
  }
  function handleAll(){
    setTasksToDisplay(TASKS)
  }
 
  function handleFilter(category){
    setTasksToDisplay(TASKS.filter(task=> task.category===category))
  }
  function onTaskFormSubmit(task){
    setTasksToDisplay([...tasksToDisplay, task])

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter} handleAll={handleAll}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList Tasks={tasksToDisplay} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
