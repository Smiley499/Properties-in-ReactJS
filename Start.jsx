import React, { useState } from 'react'

const Hello = (a) => {
  // const [name,usename]=useState('properties')
  return (
   
    <div id='container'> 
        <h1 id='name'>name: {a.name} </h1>
        <h2 id='name'>born: {a.born}</h2> 
    <h2 id='name'> location: {a.location}</h2>
    </div>
  )
}

export default Hello
