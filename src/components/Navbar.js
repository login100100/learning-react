import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import '../styles/navbar.scss';

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="navbar__logo">
                    <div className="navbar__logo-image">
                        <img src={logo} className="App-logo logo" alt="logo" />
                    </div>
                    <span className="navbar__logo-description">
                        <Link to="/" className="navbar__logo-description-link">React test app</Link>                        
                    </span>
                </div>
                <ul className="navbar__links">
                    <li className="navbar__links-item">
                        <Link to="/login" className="navbar__links-item-link">Login</Link>
                    </li>
                    <li className="navbar__links-item">
                        <Link to="/posts" className="navbar__links-item-link">Posts</Link>
                    </li>
                    
                </ul>
            </nav>
        )
    }
}

export default NavBar;