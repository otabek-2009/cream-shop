import React from 'react'
import logo from '../image/logotxt.png'
import '../style/Header.css'
import logo_dark from  '../image/creamshop_black.svg'
import { NavLink, useLocation } from 'react-router-dom'
function Header() {
  let location = useLocation()
  return (
    <header id={location.pathname === "/" ? "home" : "header" && location.pathname === "/about"  ? "home" : "header"}>
     <div className="canteyner">
        <nav>
            <ul className='ankr'>             
              <NavLink to="/about" id='Shop'>Shop</NavLink>
              <NavLink to="/pdp" id='Shop'>About</NavLink>
            </ul>
            <NavLink to="/">
              <img className='logo' src={location.pathname === "/" ? logo : logo_dark && location.pathname === "/about" ? logo : logo_dark} alt="" />
               
            </NavLink>
            <ul className='ankr'>
                <NavLink to="/" id='Shop'>Accaunt</NavLink>
                <NavLink to="card" id='Shop'>Cart </NavLink>
            </ul>
        </nav>
     </div>
        
    </header>
  )
}

export default Header
