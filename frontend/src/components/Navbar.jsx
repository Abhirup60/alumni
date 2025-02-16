import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
  // const isLogin = true;
  const { isLoggedin } = useAuth();

  return (
    <div>
      <div className='container'>
        <div className='logo-brand'>
          <b>
            <a href='/' className='text-xl'>
              Alumni
            </a>
          </b>
        </div>

        <nav className=' right-navbar flex flex-row gap-7'>
          <ul>
            <NavLink to='/'>Home</NavLink>
          </ul>
          <ul>
            <NavLink to='/about'>About</NavLink>
          </ul>
          <ul>
            <NavLink to='/service'>service</NavLink>
          </ul>
          <ul>
            <NavLink to='/contact'>Contact</NavLink>
          </ul>
          {isLoggedin ? (
            <ul>
              <NavLink to='/logout'>Logout</NavLink>
            </ul>
          ) : (
            <>
              <ul>
                <NavLink to='/login'>Login</NavLink>
              </ul>
              <ul>
                <NavLink to='/registration'>Register</NavLink>
              </ul>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
