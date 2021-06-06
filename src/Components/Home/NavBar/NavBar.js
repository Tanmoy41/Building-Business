import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className="text-white">Building Business</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#" className="text-white">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
