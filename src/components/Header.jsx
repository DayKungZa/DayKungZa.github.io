import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header-links">
            <span>
                <Link to="/" className="header-link">Home</Link>
                <Link to="/Project" className="header-link">Projects</Link>
                <Link to="/Experience" className="header-link">Experiences</Link>
                <Link to="/About" className="header-link">About</Link>
            </span>
        </nav>
    );
};

export default Header;