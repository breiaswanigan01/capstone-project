import React from "react";
import { useState } from "react";

function BookingForm(availableTimes) {
    
        const [date, setDate] = useState("");
        const [time, setTime] = useState(" ")
        const [guests, setGuests] = useState(" ") 
    const [occasion, setOccasion] = useState(" ");
    const [availableTimes, setAvailableTimes] = useState(
  function times()  {[
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
    ]})
  
    
    const handleSubmit = () => {
        console.log("FORM SUBMITTED!");
    }
        return (
  
        <div className="booking-form">   
<form onSubmit={handleSubmit}>
<fieldset>
<div className="form">
   <h2>Reserve A Table at Little Lemon!</h2> 
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date"
   value={date}
   onChange={(e => {
       setDate(e.target.value)
   })}
   />
   <label htmlFor="res-time">Choose time</label>
   <select name="res-time "
     value={time}
     onChange={(e => {
         setTime(e.target.value)
     })}
   >
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">21:00</option>
      <option value="22:00">22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"
     value={guests}
     onChange={(e => {
         setGuests(e.target.value)
     })}
   />
   <label htmlFor="occasion">Occasion</label>
   <select name="occasion"   value={occasion}
   onChange={(e => {
       setOccasion(e.target.value)
   })}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <button type="submit" value="Make Your reservation">submit</button>
  </div>
</fieldset>
</form>
</div>      
        
    )

}

export default BookingForm;