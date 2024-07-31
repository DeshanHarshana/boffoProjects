import React from 'react'
import { useAppSelector } from '../store/store'
import { Person } from '../store/features/personSlice';

export default function List() {
    const persons : Person[] = useAppSelector(state=>state.person.persons);
  return (
    <div>
        <p>This is Person List</p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(persons=>{
                      return(
                        <tr key={persons.id}>
                            <td>{persons.id}</td>
                            <td>{persons.name}</td>
                        </tr>
                      )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
