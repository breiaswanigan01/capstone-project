import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Header";

function Navbar () {
    return (
    <>
       <div className="header">
           <Header />
<nav className="nav">
    <ul className="navbar header">
        <li >
        <Link to="/" className="nav-link link1" >Home</Link>
        </li>
        <li >
        <Link to="/menu" className="nav-link link2">Menu</Link>
        </li>
        <li >
        <Link to="/chicago" className="nav-link link3">About</Link>
        </li>
        <li >
        <Link to="/specials" className="nav-link link4">Specials</Link>
        </li>
        <li >
        <Link to="/booking" className="nav-link link5">Booking</Link> 
        </li>
       
        <li >
        <Link to="/testimonials" className="nav-link link6">Testimonials</Link>
        </li>
         </ul>
        </nav>
        </div>  
            </>

     )
    }

    




export default Navbar;