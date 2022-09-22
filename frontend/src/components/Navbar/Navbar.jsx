import React, { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../../features/auth/authSlice'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)
  const onLogout = () => {
    console.log("logoutttttttttt");
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Trip A Long</h3>
      <nav ref={navRef}>
        {user ? (<button className="btn" onClick={onLogout}>Logout</button>) : (<><a href="#"> Rent Your Car</a>
        <a href="#">Become A Driver</a>
        <a>
          <Link to="/login">Log In</Link>
        </a>
        <a>
          <Link to="/signup">Sign Up</Link>
        </a></>)}
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
