import React from 'react'
import { useSelector } from 'react-redux';

function Data() {
  let {count}=useSelector(state=>state.c);
    
  return (
    <div>
        <h1>Component Data</h1>
        <p>This is a simple component Data.</p>
       <h2>Data: {count}</h2>
    </div>
  )
}

export default Data
