import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import endPoints from "../constants/endPoints";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const styles = {
  logo: {
    width: 50,
    height: 40,
  },
};

const Header = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endPoints.header, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  let activeStyle = {
    color: "#02A3BC",
    padding: "8px",
  };

  return (
    <Navbar sticky="top" variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            to="/"
            style={styles.logo}
            src="logo.png"
            className="d-inline-block align-top"
            alt="main logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav>
            {data &&
              data.sections?.map((section, index) => (
                <Nav.Item style={{ alignSelf: "center" }} key={index}>
                  <NavLink
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to={section.href}
                  >
                    {section.title}
                  </NavLink>
                </Nav.Item>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
