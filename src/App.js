import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [gifs, setGifs] = useState(['https://media0.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47zuapvzpgrsn36xuv2x1j9aenb71qumtyqxgoy3l1&rid=200w.webp&ct=g']) 
  return (
    <div className="App">
      <section className="App-content">
        <img src={gifs} alt="" />
        gifs
      </section>
    </div>
  );
}

export default App;

// import { useState,useEffect } from 'react';

// function App() {
//   const [gif,setGif] = useState([])
//   useEffect(()=>{
//     fetch('https://api.giphy.com/v1/gifs/search?api_key=jGbjzvogAKINV2OSxJGPMjWGDC4DlIfj&q=panda&limit=10&offset=0&rating=g&lang=en')
//     .then((data)=>{
//       data.json()
//       .then(({data})=>setGif(data));
//       })
//   },[])
//     console.log(gif);

//   return (
//     <div className="App">

//     </div>
//   );
// }
