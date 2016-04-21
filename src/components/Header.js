import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends Component {
  render () {
    return (
      <Navbar fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">HOME</NavItem>
          <NavItem eventKey={2} href="#">SOBRE</NavItem>
          <NavItem eventKey={3} href="#">PALESTRANTES</NavItem>
          <NavItem eventKey={4} href="#">PROGRAMAÇÃO</NavItem>
          <NavItem eventKey={5} href="#">PATROCÍNIO</NavItem>
          <NavItem eventKey={6} href="#">LOCAL</NavItem>
          <NavItem eventKey={7} href="#">GUIA DE SOBREVIVÊNCIA</NavItem>
          <NavItem eventKey={8} href="#">CONTATO</NavItem>
        </Nav>
      </Navbar>
    );
  }
};

export default Header;