import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Container className="navbar">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/library" exact>Library</NavLink>
    </Container>
  );
};

export default NavBar;