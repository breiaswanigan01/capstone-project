import React from "react";
// import Navbar from "./homepage components/Navbar";
import { BrowserRouter, Link, Router, Route, Routes} from 'react-router-dom';


function Nav() {
    return (
        <>
        <nav style={{}}>
<ul style={{display:"flex", justifyContent:"space-evenly",listStyleType:"none"}}>
<li><a href="#">Home </a></li>

<li><a href="#">About </a></li>
<li><a href="#">Testimonials </a></li>
<li><a href="#">Order Online </a></li>
<li><a href="#">Login </a></li>


</ul>
 </nav>
<nav style={{display:"grid", gridTemplateRows:"repeat(5, 1fr)", backgroundColor:"pink"}}></nav>

<BrowserRouter>
 <nav>
    <ul>
        <li>
        <Link to="/" >Home</Link>
        </li>
        <li>
        <Link to="/navbar" >Navigation</Link>
        </li>
        <li>
        <Link to="/hero" >Call to Action</Link>
        </li>
        <li>
        <Link to="/chicago">About</Link>
        </li>
        <li>
        <Link to="/testimonials" >Customers Say</Link>
        </li>
        <li>
        <Link to="/booking">Reserve a Table</Link> 
        </li>
        <li>
        <Link to="/specials">Login</Link>
        </li>
         </ul>
        </nav>
        </BrowserRouter>
        </>
    )
}

export default Nav;