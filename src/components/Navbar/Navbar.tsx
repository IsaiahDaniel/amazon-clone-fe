import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/amazon_PNG28.png";

import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
        <div className="container">
            <div>
                <Link to="/" className="navbar__brand">
                    <img src={Logo} alt={"amazon logo"} width={100} height={50} />
                </Link>
            </div>

            <ul className='navbar__links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/sigin">Sign In</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;