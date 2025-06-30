import { useState } from 'react'

function App() {
  let [ count, setCount]= useState(0)
  const incValue=()=>{
    setCount(count+1)
  }
  const resValue=()=>{
    setCount(0)
  }
  return (
    <>
      <h1>The Abhishek Jaiswal</h1>
      <h2>Counter : {count}</h2>
      <button onClick={incValue}> Increase Value </button>
      <br />
      <button onClick={resValue}>Reset Value </button>
    </>
  )
}

export default App
