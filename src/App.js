import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const abc=()=>{
    alert("okey Google ")
  }
  return (
      <body>
      <input type="button" value="btn" onClick={abc}/>
      

      </body>
  );
}

export default App;
