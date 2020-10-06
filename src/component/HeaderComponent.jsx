import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarBrand,
   
    DropdownToggle,
    DropdownMenu,

} from "reactstrap";

import {NavLink} from "react-router-dom";



function HeaderComponent() {

    const [isToggle,setIsToggle]=useState(false);
    function handleToggle()
    {
        setIsToggle(!isToggle);
    }
    return <Navbar color="light" light expand="md">
        <NavbarBrand> <NavLink to="/" className="nav-link"></NavLink>Logo</NavbarBrand>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isToggle} navbar>

            <Nav className="mr-auto" navbar>
                <NavItem >
                    <NavLink className="nav-link" to="/" > Home </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/to-like-more">To like</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink  className="nav-link"to="/show-user">All User</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>

}

export default HeaderComponent;