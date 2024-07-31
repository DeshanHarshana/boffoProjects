import React from 'react'

export default function Child({setState} : any) {
  return (
    <div>
        <button onClick={()=>{
            setState(Math.random())
        }}>I am Child</button>
    </div>
  )
}
