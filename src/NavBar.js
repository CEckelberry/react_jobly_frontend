import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {Navbar,
  Nav,
  NavItem,
 } from "reactstrap";

function NavBar() {
    let loggedIn = true;


    if (!loggedIn){
        return (
            <div>
              <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                  Jobly
                </NavLink>
        
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/signup">Sign Up</NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
          );
    }

        return (
            <div>
                <Navbar expand="md">
                    <NavLink href="/" exact to="/" className="navbar-brand">
                      Jobly
                    </NavLink>

        
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/logout">Log Out</NavLink>
                    </NavItem>
                </Nav>
              </Navbar>
            </div>
        );
  }

export default NavBar;