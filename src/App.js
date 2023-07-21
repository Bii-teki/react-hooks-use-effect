import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] =useState(0)
  const [text, setText] =useState(0)
  const [images, setImages] = useState([]);
  useEffect(() => {
    document.title = text;
  }, [text]);

  // useEffect(() => {
  //   setTimeout(() => setCount(0), 5000);
  // }, []);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        setImages(data.message);
      }); 
    console.log("useEffect called");
  },[]); 
  console.log("Component rendering");

  return<div>
  <button onClick={(e)=>setCount((count)=> count + 1)}>Click Me {count} times</button>;
  <input 
  type="text"
  placeholder="Type away..."
  value={text}
  onChange={(e)=>setText(e.target.value)}
  
  />
  {images.map((image) => (
        <img src={image} key={image} />
      ))}
  
  
  </div> 

}

export default App;
