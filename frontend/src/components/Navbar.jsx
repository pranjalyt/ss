import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        <span className="logo-text">SHANU SIR CLASSES</span>
                    </Link>

                    <button
                        className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
                        <Link to="/courses" className="navbar-link" onClick={closeMenu}>Courses</Link>
                        <Link to="/syllabus" className="navbar-link" onClick={closeMenu}>Syllabus</Link>
                        <Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link>
                        <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
