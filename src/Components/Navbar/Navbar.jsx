import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore } from "react-icons/md"
import {AiFillCloseCircle } from "react-icons/ai"
import {TbGridDots } from "react-icons/tb"

const Navbar = () => {
  return (
 <section className='navBarSection'>
    <header className="header flex">

        <div className="logoDiv">
<a href="#" className='logo flex'>
    <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
</a>
        </div>

        <div className="navBar ">
            <ul className="navLists flex">
                <li className="navitem">
                    <a href="#" className="navLink">Home</a>
                </li>
                <li className="navitem">
                    <a href="#" className="navLink">Packages</a>
                </li>
                <li className="navitem">
                    <a href="#" className="navLink">Shop</a>
                </li>
                <li className="navitem">
                    <a href="#" className="navLink">About</a>
                </li>
                <li className="navitem">
                    <a href="#" className="navLink">Pages</a>
                </li>
                <li className="navitem">
                    <a href="#" className="navLink">News</a>
                </li>
                <li className="navitem">
                    <a href="#" className="navLink">Contacts</a>
                </li>
            <button className="btn">
                <a href="#" >Book Now</a>
            </button>
</ul>

            <div className="closeNavbar">
                <AiFillCloseCircle className="icon"

                />    
                   </div>
</div>

<div className="toggleNavbar">
    <TbGridDots className='icon' />
        </div>
    </header>

 </section>
  )
}

export default Navbar