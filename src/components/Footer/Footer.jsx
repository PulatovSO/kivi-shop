import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoDark from '../../assets/images/logo-dark.svg';
import appStore from '../../assets/images/AppStore.svg';
import googlePlay from '../../assets/images/Android.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <Link to='/'>
                            <img src={logoDark} alt="logo-dark" />
                        </Link>
                        <p className="footer__slogan">
                            Продай, найди, купи <br />
                            все что ты пожелаешь 
                        </p>
                    </div>
                    <p className="footer__text">
                        Веб сайт бесплатных обьявлений | на базе <br /> 
                        имеется 234 944 999 шт обяления
                    </p>
                    <div className="footer__links">
                        <a href="https://www.apple.com/ru/app-store/" target='_blank'>
                            <img src={appStore} alt="app-store" />
                        </a>
                        <a href="https://play.google.com/store/apps" target='_blank'>
                            <img src={googlePlay} alt="app-store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
