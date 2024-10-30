import React from 'react';
import { useState,useEffect } from 'react';
const PracticeHooks = () => {
    const [color,setColor] = useState('');
  const [text,setText] = useState('');
  useEffect(()=>{
    console.log(color);
  },[color]);
  return (
    <div>
      <div>
        <p className={`area ${color}`}></p>
        <button onClick={()=>setColor('red')}>red</button>
        <button onClick={()=>setColor('blue')}>blue</button>
        <button onClick={()=>setColor('green')}>green</button>
        <button onClick={()=>setColor('yellow')}>yellow</button>
        <button onClick={()=>setColor('orange')}>orange</button>
      </div>
      <div>
        <input onChange={(e)=>setText(e.target.value)} type="text" />
      </div>
    </div>
  );
};

export default PracticeHooks;