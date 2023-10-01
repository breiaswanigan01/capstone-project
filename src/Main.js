import React from "react";
import {Routes, Route} from 'react-router-dom';
import Homepage from './homepage-components/Homepage';
import Booking from './homepage-components/Booking';
import Chicago from './homepage-components/Chicago';
import Menu from './homepage-components/Menu';
import Nav from "./Nav";
import Specials from './homepage-components/Specials';
import Testimonials from './homepage-components/Testimonials';
// import { useState } from "react";
// import BookingForm from "./homepage-components/BookingForm";

function Main() {
// const [activeTime, setActiveTime] = useState({times});

// const [availableTimes, setAvailableTimes] = useState(
//    [ availableTimes = 
//       "17:00",
//         "18:00",
//         "19:00",
//         "20:00",
//         "21:00",
//         "22:00"
//         ], 
//         )



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
{/* <ul>
{availableTimes.map((availableTime) => {
      <li key={availableTime.id}>{availableTimes}</li>
})}
    </ul> */}
{/* <BookingForm data={this.state.availableTimes}/> */}


        </>

 
    )
    }

export default Main;
