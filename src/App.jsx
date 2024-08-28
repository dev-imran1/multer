import React, { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [imgMulter, setimgMulter] = useState(null); // Should be null initially for file handling

  const handleClick = () => {
    // const formData = new FormData(); // Create FormData object
    // formData.append("imgUpload", imgMulter); // Append the file to the FormData
    // formData.append("demo", "123456");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/img",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data:{
        imgUpload,
        demo: '23'
      } // Use the FormData object

    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImage = (e) => {
    let images = e.target.files[0]; // Get the first file directly
    setimgMulter(images[0]); // Store the file object

    let reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(images); // Read the first file as data URL
  };

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <input type="file" name="imgUpload" onChange={handleImage} />
      <button onClick={handleClick}>Submit</button>
      {image && <img src={image} alt="Preview" />} {/* Image preview */}
    </>
  );
}

export default App;
//1.15