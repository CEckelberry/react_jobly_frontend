import React, { useState } from "react";
import { NavLink as ClientRoute} from "react-router-dom";
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    let loggedIn = true;


    if (!loggedIn){
        return (
          <div>
          <Navbar color="light" light expand="md">  
              <NavbarBrand tag={ClientRoute} exact to="/">Jobly</NavbarBrand>
                <Nav className="mr-auto" navbar>
                </Nav>
                <NavbarText><NavLink tag={ClientRoute} to="/login">Login</NavLink></NavbarText>
                <NavbarText><NavLink tag={ClientRoute} to="/signup">Sign Up</NavLink></NavbarText>
            </Navbar>
        </div>
          );
    }

        return (
            <div>
              <Navbar color="light" light expand="md">  
                  <NavbarBrand tag={ClientRoute} exact to="/">Jobly</NavbarBrand>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink tag={ClientRoute} to="/companies">Companies</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={ClientRoute} to="/jobs">Jobs</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={ClientRoute} to="/profile">Profile</NavLink>
                      </NavItem>
                    </Nav>
                    <NavLink tag={ClientRoute} to="/logout">Log Out</NavLink>
                  </Collapse>
                </Navbar>
            </div>
        );
  }

export default NavBar;