import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import endpoints from "../constants/endpoints";
import React, { useEffect, useState } from "react";

const styles = {
  logo: {
    width: 50,
    height: 40,
  },
};

const Header = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endpoints.header, {
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {data &&
              data.sections?.map((section, index) => (
                <Nav.Link key={index} href={section.href}>
                  {section.title}
                </Nav.Link>
              ))}
            {/* <Nav.Link href={data?.sections[0].href}>Home</Nav.Link>
            <Nav.Link href={data?.sections[1].href}>About</Nav.Link>
            <Nav.Link href={data?.sections[2].href}>Skills</Nav.Link>
            <Nav.Link href={data?.sections[3].href}>Education</Nav.Link>
            <Nav.Link href={data?.sections[4].href}>Experience</Nav.Link>
            <Nav.Link href={data?.sections[5].href}>Projects</Nav.Link> */}
            <NavDropdown title="Contact me" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contact/resume">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact/email">
                E-mail Vinnie
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
