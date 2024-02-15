import React from "react";
import {  logo} from "./assets/img/volver.webp"; 

const Header = () => {

  return <section id="header-section">
    <section id="svg-section">
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="header-svg"fill="#392759" d="M0,256L30,218.7C60,181,120,107,180,74.7C240,43,300,53,360,85.3C420,117,480,171,540,181.3C600,192,660,160,720,165.3C780,171,840,213,900,197.3C960,181,1020,107,1080,112C1140,117,1200,203,1260,234.7C1320,267,1380,245,1410,234.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

    </section>
    
    {/* <img  className="logo"src="./src/assets/img/logo_sin_fondo.webp" alt="logo" /> */}
    <img  className="logo" src={logo} alt="logo importado" />
    </section>;
};

export default Header;
