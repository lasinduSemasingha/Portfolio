import React from "react"
import './navbar.scss'
import Social from "../Social/Social";
import Gmail from "../Gmail/Gmail";
import PDF from "/cv.pdf";

const Navbar = () => {
  const items = ["Home","About","Work","Contact"];
  
  return (
    <>
    <Social />
    <Gmail />
        <div className="wrapper">
            <div className="ima">
                <a href="/"><img src="/l.gif" alt="" /></a>
            </div>
            <div className="nav">
                {items.map((item)=>(
                  <li><a href={`#${item}`} key={item}>{item}</a></li>
                )
                )}
                <a className="shadow-pop-br" target="_blank" href={PDF}>Resume</a>
            </div>
            
        </div>
    
    </>
  )
};

export default Navbar;
