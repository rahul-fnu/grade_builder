import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from '../styles/Navigation.module.css';

class NavigationBar extends Component { 
    render() {
        return (
        
            <Navbar expand="lg" variant="dark" style={{ backgroundColor: "silver", color: "black" }}>
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
                <Navbar.Collapse className={styles.nav} id="responsive-navbar-nav">
                    <Nav fill className={styles.inline}>
                        <Nav.Item href="/dashboard">Home</Nav.Item>
                            <NavDropdown title="Subjects" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#">Physics</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Chemistry</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Mathematics</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Economics</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className={styles.right_nav} href="#">Link Right</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        );
    }
}

export default NavigationBar;
