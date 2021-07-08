import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MyNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="mr-auto">Armin's Website</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>
                <Link to='/'>
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/portfolio'>
                  Portfolio
                 </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/contact'>
                  Contact
                 </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavBar;