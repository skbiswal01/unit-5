import { useState } from 'react';

import './App.css';


function App() {

const[counter,setCounter]=useState(0)

const handleadd=(value)=>{
  setCounter(counter+value)}

  const handlemulti=(value)=>{
    setCounter(counter*value)}

  const handlesub=(value)=>{
      if(counter===0){
        alert("you cant go below this")
        return }
        setCounter(counter-value)
  }
  return(
  
  <div className='app'>
    <h3 className= {`${counter%2===0?"green":"red"}`}>Counter:{counter}</h3>
    <button onClick={()=>{handleadd(1)}}>add1
    </button>

    <button
    onClick={()=>{handlesub(1)}}>
      Subtract 1
    </button>
    <button
    onClick={()=>{handlemulti(2)}}>
      double 1
    </button>
    
  </div>
    
  )
 
}

export default App;
