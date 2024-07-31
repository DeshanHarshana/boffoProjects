import React, { useRef } from 'react'
import { useAppDispatch } from '../store/store'
import { addPerson, savePerson } from '../store/features/personSlice';

export default function Add() {
    const name = useRef<string>("")
    const dispach = useAppDispatch();
  return (
    <div>
        
            <label htmlFor=''>Person Name</label>
            <input onChange={e=>name.current=e.target.value}/>
            <button onClick={()=>{
                dispach(savePerson(name.current))
            }}>Add</button>
      
    </div>
  )
}
