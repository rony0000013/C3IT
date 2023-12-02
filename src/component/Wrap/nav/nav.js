import React, { useRef } from 'react'
import Style from "./nav.module.css"
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
 
  return (
    <div className={Style.mainNav} >
      <div className={Style.logo}>
       <Link to="/"> <img src="img/aot-logo.jpg" height={34}  width={80} alt="" /></Link>
      </div>
      <div className={Style.navItemm}>
      <Link to="/#about">about</Link>
      <Link to="/scope">scope</Link>
      <Link to="/speakers">speakers</Link>
      <Link to="/schedule">schedule</Link>
      <div className={Style.dropdown}>
      <a  href="#" className={Style.dropdownBtn}>committees <span className={Style.icon}><MdOutlineArrowDropDown/></span></a>
      <div className={Style.dropdownWrap}>
      <div className={Style.dropdownContent}>
      <Link to="/Committee/Advisory">Advisory com</Link>
      <Link to="/Committee/Technical">Technical com</Link>
      <Link to="/Committee/Organising">Organising com</Link>
      {/* <Link to="/Committee/Co-chair">Co-chair com</Link>
      <Link to="/Committee/Steering">Steering com</Link> */}
      </div>
      </div>
      </div>
      <Link to="/Registration">registration</Link>
      <Link to="/#contact">contact</Link>
      <div className={Style.dropdown}>
      <a href="#"className={Style.dropdownBtn}>more <span className={Style.icon}><MdOutlineArrowDropDown/></span></a>
      <div className={Style.dropdownWrap}>
      <div className={Style.dropdownContent}>
      <Link to="/#faq">faq</Link>
      <Link to="/#venue">venue</Link>
      <Link to="/Sponsors">sponsors</Link>
      <Link to="/#gallery">gallery</Link>
      <Link to="/Attractions">Attractions</Link>
      <Link to="/PrevConf">Prev Conferences</Link>      
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Nav
