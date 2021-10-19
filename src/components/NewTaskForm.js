import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {
  
  const [details, setDetails] = useState('')
  function handleDetailsChange(e){
    setDetails(e.target.value)
  }
  const [category, setCategory]= useState('')
  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    const formData={
      text: details,
      category: category
    } 
    onTaskFormSubmit(formData)
  }
  
  
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
