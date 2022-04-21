import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//styles
import './Navbar.css';

export const Navbar = () => {

    const [active, setActive] = useState('links');

    const ToggleNav = () => {
       active === 'links' ? setActive('links active') : setActive('links');
    }


    
        return (
            <div className="navbar-container">
                <div className="navbar">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className={active}>
                        <div className="navbar-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="navbar-burger">
                        <FontAwesomeIcon icon={faBars} onClick={ToggleNav} />
                    </div>
                </div>
            </div>
        )
    }