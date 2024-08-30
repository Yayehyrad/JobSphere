import { useState } from 'react'
import { Outlet } from 'react-router-dom'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' text-red-600'> hello</h1>
      <Outlet/>
    </>
  )
}

export default App
