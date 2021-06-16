import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavigationBar extends Component { 
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#50C878", color: "#F8F7FC" }}>
            <Navbar.Brand href="/landing-page">
                <img
                data-testid="navbar-logo"
                alt=""
                src="./images/LogoExtendedSVG.svg"
                width="66"
                height="46"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav fill className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Modify Data</Nav.Link>
                    <Nav.Link href="#">Query Data</Nav.Link>
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Contact us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Main Site</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default NavigationBar;