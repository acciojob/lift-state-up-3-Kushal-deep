
 import React from "react";
const ChildComponent2 =({selectedOption,handleSelect}) =>{
  return (
    <>
    <h2>Child Component 2</h2>
    <button onClick={()=>handleSelect("Option 2")}>Option 2</button></>
  )
}


export default ChildComponent2;