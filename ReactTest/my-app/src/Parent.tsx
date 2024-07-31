import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [state, setState] = useState<string>("")
  return (
    <div>
        <h2>{state}</h2>
        <Child setState = {setState} />
    </div>
  )
}
