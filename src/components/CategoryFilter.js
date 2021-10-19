import React, {useState} from "react";

function CategoryFilter({categories, handleFilter,handleAll}) {
const [selected, setSelected] = useState('')
function handleClick(e){
  if(e.target.value==="All"){
    setSelected('selected')
    handleAll()
  }else if (e.target.className === ""){
    e.target.className='selected'
    handleFilter(e.target.value)
  }else if (e.target.className ==="selected"){
    e.target.className=""
  }

 }
  const categoriesList = categories.map((category)=> 
    <button onClick={handleClick} className={selected} key={category} value={category}>{category}</button>
  
  ) 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesList}
    </div>
  );
}

export default CategoryFilter;
