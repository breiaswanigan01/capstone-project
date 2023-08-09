import React from "react";
import Logo from "./little-lemon-logo.png";
function Footer() {
    return (
        <>
        <footer style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)" }}>
 <img src={Logo} alt="little lemon logo"  />

        <nav>
 <ul style={{listStyleType:"none"}}>
 <h5>Doormat Nav</h5>

<li style={{listStyleType:"none"}}><a href="#">Home </a></li>
<li><a href="#">About </a></li>
<li><a href="#" >Reservations </a></li>
<li><a href="#">Order Online </a></li>
<li><a href="#">Login </a></li>
</ul>
 </nav>

 <ul style={{listStyleType:"none"}}>
 <h5>Contact</h5>
    <li>Address:</li>
    <li>Email:</li>
    <li>Phone Number:</li>
 </ul>
<ul style={{listStyleType:"none"}}>
<h5>Social Media Contact</h5>

    <li><a href="https://www.twitter.com">Twitter
    </a></li>
    <li><a href="https://www.linkedin.com/in/breia-swanigan-0b65b61a0/">LinkedIn
    </a></li>
    <li><a href="https://www.facebook.com">Facebook
    </a></li>
    <li><a href="https://www.github.com">Github
    </a></li>

    </ul>
        </footer>
        </>
    )
}

export default Footer;
