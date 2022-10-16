import { Navbar, Container, Nav } from "react-bootstrap";
import styled, { ThemeContext } from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

const ExternalNavLink = styled.a`
  color: 'white'
  &:hover {
    color: 'black'
  }
  &::after {
    background-color: 'black'
  }
`;
const InternalNavLink = styled(NavLink)`
  color: 'white';
  &:hover {
    color: 'black';
  }
  &::after {
    background-color: 'black;
  }
  &.navbar__link--active {
    color: 'black';
  }
`;
const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className="nav-bar-nav"
        >
          testing
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
