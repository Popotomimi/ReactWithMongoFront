import React, { useState } from 'react';

import { NavLink } from "react-router-dom";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [styled, setStyled] = useState(false);

  const handleStyle = () => {
    if (!styled) {
      setStyled(true);
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "#FFF";
    } else {
      setStyled(false);
      document.body.style.backgroundColor = "#FFF";
      document.body.style.color = "#222";
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/edit">Edit</NavLink>
        </li>
        <li>
          <NavLink to="/form">Register</NavLink>
        </li>
        <li className="styleBack" onClick={handleStyle}>
          {!styled && <BsFillMoonFill />}
          {styled && <BsFillSunFill />}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;