import React, { useState } from "react"


function App() {

  const [input, setInput] = useState("")
  const [image, setImage] = useState("")



const handelClick = () => { 
  console.log(image)
 }

 const handelImage = (e) => { 

  let images = e.target.files;

  let reader = new FileReader();

  reader.onload = () =>{
    setImage(reader.result)
  }

  reader.readAsDataURL(images[0])

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
