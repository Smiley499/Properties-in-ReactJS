import React from 'react'
import { useState } from 'react'

const Express = () => {
  const [number,setnew]= useState(0)
  const increment= () => {
    setnew(number+1)
  }
  let decrement= () =>{
    if(number>0){
    setnew(number-1)
    }
  }
  let reset =()=>{
    setnew(0)
  }
  let alertbutton =()=>{
    alert('you clicked alert button')
  }
  return (
    
    <div className='containers'>
      <h2>{number}</h2>
      <button onClick={increment} className='btn btn-success'>click</button>
      <button onClick={decrement}className='btn btn-primary'>decrement</button>
      <button onClick={reset}className='btn btn-danger'>reset</button>
      <button onClick={alertbutton}className='btn btn-light' id='use'>usestate</button>
    </div>
  )
}

export default Express

