import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='navbar-item'>
                Home
            </Link>
            <Link to='/products' className='navbar-item'>
                Products
            </Link>
        </div>
    );
};

export default Header;
