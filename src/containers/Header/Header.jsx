import React from 'react';
import './Header.css';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <HeaderTop />
                <HeaderBottom />
            </div>
        </header>
    );
}

export default Header;
