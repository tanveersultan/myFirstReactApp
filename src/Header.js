import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Bootstrap/css/header.css';

function Header() {
    return <section > 
      <div id="navbar">
        <div className="logo">
         
        </div>
        <div className="inner-Nav">
        <div id="nav-top">
                        <a href="#">MeetPropeitor</a>
                        <a href="#">Sing Up</a>
                        <a href="#">Login</a>
                    </div>
                    <div id="nav-bottom">
                        <ul>
                            <li><a href="#">Sell your Home</a></li>
                            <li><a href="#">Buy Your Next Home</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact Up</a></li>
                            <li><a href="#">Have a Questiion</a></li>
                        </ul>
                    </div>

        </div>
      </div>
   </section>
  }

export default Header;