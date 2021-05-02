import { useState } from 'react';
import {Message}  from './Message';
import './App.css';

export default function App() {
  
  let [count,setCount] = useState(0); 
  let [isDay,setDay]= useState(true);

  return (
    <div className={`box ${isDay ? 'daylight' : '' }`}>
      <h1>Good {isDay ? 'Morning' : 'Night'}</h1>
      <Message counter={count}></Message>
      <br/>
      <button onClick={
        ()=> setCount(++count)
      }>Update Counter</button>

      <button onClick={()=>setDay(!isDay)}>Update Day Light</button>
    </div>
  );
}