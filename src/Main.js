import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from './homepage-components/Homepage';
import Booking from './homepage-components/Booking';
import Chicago from './homepage-components/Chicago';
import Menu from './homepage-components/Menu';
import Nav from "./Nav";
import Specials from './homepage-components/Specials';
import Testimonials from './homepage-components/Testimonials';
import { useState } from "react";

function Main() {
// const [activeTime, setActiveTime] = useState({times});

    return (

        <>
<Routes>
<Route path="/" element={<Homepage />}> </Route>
<Route path="/booking" element={<Booking />}></Route>
<Route path="/chicago" element={<Chicago />}></Route>
<Route path="/menu" element={<Menu />}></Route>
<Route path="/nav" element={<Nav />}></Route>
<Route path="/specials" element={<Specials />}></Route>
<Route path="/testimonials" element={<Testimonials />}></Route>
</Routes>
{/* <Navbar /> */}



        </>

 
    )
    }

export default Main;
