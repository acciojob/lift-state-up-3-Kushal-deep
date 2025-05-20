
import React from "react";

const ChildOne =({selectedOption,handleSelect})=>{
  return (
    <>
    <h2>Child Component 1</h2>
    <button onClick={()=>handleSelect("option 1")}>option 1</button>
    </>

  )
}

export default ChildOne;