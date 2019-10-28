import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Header'
import Footer from './Components/Footer'
import Header from './Header';
import './Bootstrap/css/bootstrap.css'

function App() {
  const abc=()=>{
    alert("okey Google ")
  }
  return (
      <body className=" bg-primary">

       <section id="Header">
       
       <Header></Header>
       
       <Footer></Footer> 
       </section>
       

      </body>
  );
 
}

export default App;
