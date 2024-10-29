import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Express from './Footer'
import Hello from './Start'

function App(){
  const [count , setCount] = useState(0)
    return(
    <>
    <img src="/jun ji-hyun.jpg" alt="jun ji-hyun image"  className='images'/>
    <Hello name='jun ji-hyun' born='30 october 1981' location='south korean'/>
    <img src="/park shin-hye.jpeg" alt="park shin-hye"  className='images' />
    <Hello name='park shi-hye' born='18 february 1990' location='south korean'/>
    <img src="/bae suzy.jpeg" alt="bae suzy image"  className='images'/>
    <Hello name='bae suzy' born='22 november 19981' location='korean'/>
    <Express/>
    </>
  )

}



export default App
