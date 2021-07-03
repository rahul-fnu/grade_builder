import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavigationBar extends Component { 
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#50C878", color: "#F8F7FC" }}>
            <Navbar.Brand href="/dashboard">
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
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <NavDropdown title="Subjects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/physics">Physics</NavDropdown.Item><br/>
                        <NavDropdown.Item href="/chemistry">Chemistry</NavDropdown.Item><br/>
                        <NavDropdown.Item href="/maths">Maths</NavDropdown.Item><br/>
                        <NavDropdown.Item href="/economics">Economics</NavDropdown.Item><br/>
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