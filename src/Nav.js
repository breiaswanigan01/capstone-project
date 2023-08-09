import React from "react";
function Nav() {
    return (
        <>
        <nav style={{}}>
<ul style={{display:"flex", justifyContent:"space-evenly",listStyleType:"none"}}>
<li><a href="#">Home </a></li>
<li><a href="#">About </a></li>
<li><a href="#">Reservations </a></li>
<li><a href="#">Order Online </a></li>
<li><a href="#">Login </a></li>


</ul>
 </nav>
{/* <nav style={{display:"grid", gridTemplateRows:"repeat(5, 1fr)", backgroundColor:"pink"}}></nav> */}

        </>
    )
}

export default Nav;