import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/home'>Home</Link>
                <Link className = "nav-link" to='/about'>About Us</Link>
                <Link className = "nav-link" to='/map'>Map</Link>
                <Link className = "nav-link" to='/admin'>Admin</Link>
                <LinK className = "nav-link" to='/register'>Register</LinK>
            </div>

        </div>
    )
};

export default NavBar;
