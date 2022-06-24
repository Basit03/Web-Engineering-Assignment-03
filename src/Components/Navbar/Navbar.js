import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <div className="logo">
                <div className="logo-img-div">
                    <img src="/Images/logo.png" alt="logo" className="logoImage" width="120px"></img>
                </div>

                <div className="logo-text-div">
                    <h1 className="logoHeading">Adidas</h1>
                </div>
            </div>

            <ul className="nav-links" style={{listStyleType: "none"}}>
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                <div className="menu">
                    <li className="top"><a href="#">Home</a></li>
                    <li><a className="active" href="index.html">Collections</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#" className="cta"><button>Join Us</button></a></li>
                </div>
            </ul>

        </nav>
    </header>
  );
}

export default Navbar;
