
 import React from "react";
const ChildTwo =({selectedOption,handleSelect}) =>{
  return (
    <>
    <h2>Child Component 2</h2>
    <button onClick={()=>handleSelect("option 2")}>option 2</button></>
  )
}


export default ChildTwo;