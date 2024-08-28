import React, { useState } from "react"


function App() {

  const [input, setInput] = useState()
const handelClick = () => { 
  console.log('submit')
 }

 const handelImage = (e) => { 
  console.log(e.target.files)
  }

  return (
    <>
    <input type="text" onChange={(e)=>setInput(e.target.value)}/>
    <input type="file" onChange={handelImage}/>
    <button onClick={handelClick}>summit</button>
    </>
  )
}

export default App
