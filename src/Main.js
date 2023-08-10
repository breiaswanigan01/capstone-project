import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from './homepage components/Homepage';
import Booking from './homepage components/Booking';
import Chicago from './homepage components/Chicago';
import Hero from './homepage components/Hero';
// import Navbar from './homepage components/Navbar';
import Nav from "./Nav";
import Specials from './homepage components/Specials';
import Testimonials from './homepage components/Testimonials';

function Main() {
    return (
        <>
    <Routes>
<Route path="/" element={<Homepage />}></Route>
<Route path="/booking" element={<Booking />}></Route>
<Route path="/chicago" element={<Chicago />}></Route>
<Route path="/hero" element={<Hero />}></Route>
<Route path="/nav" element={<Nav />}></Route>
<Route path="/specials" element={<Specials />}></Route>
<Route path="/testimonials" element={<Testimonials />}></Route>



</Routes>
        </>

    )
}
export default Main;
