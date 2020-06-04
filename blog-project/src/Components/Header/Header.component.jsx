import React from 'react'
import Styles from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={Styles.header}>
                <nav className={Styles.headerMenu}>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </nav>
                <div>
                    Social Media Links
                </div>
            </header>
        </>
    )
}

export default Header
