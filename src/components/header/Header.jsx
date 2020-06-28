import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { getSearchMovie } from "../../redux/movie/action";

import "./header.style.scss";

const Header = ({ history, getSearchMovie }) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => setSearch(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    const url = encodeURI(search);
    getSearchMovie(url);
    history.push("/search");
    setSearch("");
  };
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <span>Movie</span>Land
      </Link>
      <form onSubmit={onSubmit}>
        <input
          type='search'
          name='search'
          placeholder='Search'
          value={search}
          onChange={onChange}
        />
        <button type='submit'>
          <FaSearch />
        </button>
      </form>
    </nav>
  );
};

export default compose(withRouter, connect(null, { getSearchMovie }))(Header);
