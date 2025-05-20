
import React, { useState } from "react";
import './../styles/App.css';
import ChildOne from "./ChildComponent1";
import ChildTwo from "./ChildComponent2";

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


export default App;
