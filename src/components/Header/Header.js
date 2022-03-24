import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';


const Header = () => {
    return (
        <nav className='Header'>
         <img src={logo} alt=''/>
         <div className='link'>
             <a href="">Shop</a>
             <a href="">Order</a>
             <a href="">Inventory</a>
             <a href="">About</a>
         </div>
        </nav>
    );
};

export default Header;