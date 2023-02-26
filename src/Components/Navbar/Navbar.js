import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Image } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import { THEME_CONTEXT } from "../../App";

const NavBar = () => {
  const { darkMode, setDarkMode, handleSearch } = useContext(THEME_CONTEXT);
  return (
    <Navbar expand="lg">
      <Container className="mt-2">
        <Navbar.Brand>
          {darkMode ? (
            <Image src="https://i.postimg.cc/0j0wYHfB/Image-Gallery-1.png" />
          ) : (
            <Image src="https://i.postimg.cc/DfC5vQwP/Image-Gallery.png" />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {/* searchbar */}
          <SearchBar
            placeholder="Search Images here"
            handleSearch={handleSearch}
          />
          <Nav.Link className="ms-4 nav-item">Explore</Nav.Link>
          <Nav.Link className="ms-4 nav-item">Collection</Nav.Link>
          <Nav.Link className="ms-4 nav-item">Community</Nav.Link>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end d-flex  ">
          {darkMode ? (
            <h6 className="theme-name"> Dark Mode</h6>
          ) : (
            <h6 className="theme-name"> Light Mode</h6>
          )}
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
