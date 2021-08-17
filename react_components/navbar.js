import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from '../styles/Home.module.css'
import Image from 'next/image'


class NavigationBar extends Component { 
    logout = () => {
        window.location = "https://mail.google.com/mail/u/0/?logout&hl=en";
        this.props.logout();
    }
    render() {
        return (
            <div className={styles.navbar}>
                <a>
                    <span className={styles.logo}>
                        <Image  src="/logo.png" width={80} height={80} />
                    </span>
                    <span className={styles.rightButton}>
                        <button  onClick={() => this.props.parentCallback()}>Home</button>
                        <span>  </span>
                        <button onClick={() => {this.logout()}}>Signout</button>
                    </span>
                </a>
          </div>
        );
    }
}

export default NavigationBar;