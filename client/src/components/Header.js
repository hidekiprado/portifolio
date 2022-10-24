import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import endPoints from "../constants/endPoints";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

const styles = {
  logo: {
    width: 50,
    height: 40,
  },
  activeStyle: {
    color: "#02A3BC",
    padding: "1em 1em",
    fontSize: "large",
    fontWeight: "600",
    borderRadius: "2em 2em 0.2em 0.2em ",
    boxShadow:
      "-12px 0 8px -4px rgba(2, 163, 188, 0.16), -12px 0 8px -4px rgba(2, 163, 188, 0.16) inset",
    transition: "1s",
  },
  defaultStyle: {
    padding: "1em 1em",
    fontSize: "large",
    fontWeight: "600",
    transition: "1s",
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
                <Nav.Item
                  style={{
                    alignSelf: "center",
                  }}
                  key={index}
                >
                  <NavLink
                    className="nav-link"
                    style={({ isActive }) =>
                      isActive ? styles.activeStyle : styles.defaultStyle
                    }
                    to={section.href}
                  >
                    {section.title}
                  </NavLink>
                </Nav.Item>
              ))}
          </Nav>{" "}
          <div style={{ margin: "0em 2em" }}>
            <ThemeToggler />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
