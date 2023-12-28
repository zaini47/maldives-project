import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../Reuseable/Logo';
import Dropdown from '../Reuseable/Dropdown';
import "../Navbar/Navbar.css"

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-light ${props.class} px-5 align-items-md-center`}>
        <div className="container-fluid">
          <div className="navlogo">
            <NavLink className="navbar-brand" to="/">
              <p >
                <span className='fs-2 ff-t fs-48 text-prim'>Mal</span>
                <span className={`ff-p fw-400 fs-32 ${props.logow}`}>d</span>
                <span className={`fs-3 ff-p fw-500 fs-32 ${props.logow}`} >ives</span>
              </p>
            </NavLink>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <div className="menu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className={`nav-link ${props.lists}`} aria-current="page" to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${props.lists}`} to="/Rooms">ROOMS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${props.lists}`} to="/Blogs">EVENTS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${props.lists}`} to="/About">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${props.lists}`} to="/Contact">CONTACT</NavLink>
                </li>

                <li className='nav-item'>
                  <Dropdown />
                </li>
                <div className="box">
                  <button className="botn " type="submit">BOOK NOW</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
