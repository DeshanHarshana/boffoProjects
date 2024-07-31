'use client'
import {  Prisma, User } from '@prisma/client'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Home() {
  const [user, setUser] = useState<Prisma.UserCreateInput>({name:"Default Name", age:27})
  const [users, setUsers] = useState<User[]>([])
  const [refresh, setRefresh] = useState<boolean>(false)
  const addUser = async () =>{
   const res = await axios.post("http://localhost:3000/api/users", user)
   setRefresh(!refresh)
  }

  const getUsers = async () =>{
    const usersList : User[] = await (await axios.get("http://localhost:3000/api/users")).data
    console.log(usersList)
    setUsers(usersList)
  }
  
  useEffect(()=>{
    getUsers()
  },[refresh])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <label htmlFor='name'>Name</label>
     <input type='text' id='name' onChange={(e)=>{setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value
    }))}} placeholder='name'/>

<label htmlFor='name'>Age</label>
     <input type='text' id='age' onChange={(e)=>{setUser((prevUser) => ({
      ...prevUser,
      age: Number(e.target.value)
    }))}} placeholder='age'/>
     <button onClick={addUser}>Add</button>

     <hr></hr>

     <div>
      <table>
        <tbody>
        {users.map((user:User, index:number)=>{
        return(
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        )
      })}
        </tbody>
      </table>
      
     </div>
    </main>
  );
}


