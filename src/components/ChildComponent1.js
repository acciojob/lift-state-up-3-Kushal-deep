
import React from "react";

const ChildComponent1 =({selectedOption,handleSelect})=>{
  return (
    <>
    <h2>Child Component 1</h2>
    <button onClick={()=>handleSelect("Option 1")}>option 1</button>
    </>

  )
}

export default ChildComponent1;