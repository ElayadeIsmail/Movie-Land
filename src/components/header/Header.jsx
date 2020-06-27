import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <span>Movie</span>Land
      </Link>
      <form>
        <input type='search' name='search' placeholder='Search ' />
        <button type='submit'>
          <FaSearch />
        </button>
      </form>
    </nav>
  );
};

export default Header;
