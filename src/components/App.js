
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [selectedOption,setselectedOption]=useState();

  const handleSelect =(option)=>{
    setselectedOption(option)
  }
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Componet</h1>
        <ChildOne selectedOption={selectedOption} handleSelect={handleSelect}/>
        <ChildTwo selectedOption={selectedOption} handleSelect={handleSelect}/>

        <p>selected option:{selectedOption} </p>
    </div>
  )
}


const ChildOne =({selectedOption,handleSelect})=>{
  return (
    <>
    <h2>Child Component 1</h2>
    <button onClick={()=>handleSelect("option 1")}>option 1</button>
    </>

  )
}

const ChildTwo =({selectedOption,handleSelect}) =>{
  return (
    <>
    <h2>Child Component 2</h2>
    <button onClick={()=>handleSelect("option 2")}>option 2</button></>
  )
}


export default App
