import {
  Container,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import React from "react";
import logo from "../../src/app/assets/img/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserLoginForm from "../features/user/UserLoginForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img
          src={logo}
          height="100px"
          alt="nucamp logo"
          className="float-start ms-5"
        />
        <h1 className="mt-2">NuCamp</h1>
      </NavbarBrand>
      <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-home fa-lg" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/directory">
              <i className="fa fa-list fa-lg" /> Directory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-info fa-lg" /> About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-address-card fa-lg" /> Contact
            </NavLink>
          </NavItem>
        </Nav>
        <UserLoginForm />
      </Collapse>
    </Navbar>
  );
};

export default Header;
