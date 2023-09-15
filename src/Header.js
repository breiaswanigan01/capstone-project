import React from "react";
import Logo from './little-lemon-logo.png';

function Header() {
    return (
        <>
        <div className="header">
     <img src={Logo} className="header-img"alt="little lemon logo" width="60" height="60" />
     </div>
     {/* <Navbar /> */}
{/* <header style={{display:"grid", gridTemplateRows: "repeat(2, 1fr)"}}></header> */}


        </>
    )
}

export default Header;
