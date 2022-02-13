import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTop.css'
import Logo from '../../assets/images/logo.png';
import i18n from '../../I18n';
import { useTranslation } from "react-i18next";

const HeaderTop = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        return () => {
            i18n.changeLanguage(lng)
        }
    }

    return (
        <div className='header__top'>
            <div className="header__logo-wrap">
                <Link to='/' className="header__logo-link">
                    <img src={Logo} alt="logo" />
                </Link>
                <p className="header__slogan">
                    {t('slogan')}
                </p>
            </div>
            <ul className="header__link-list link-list">
                <li className="link-list__item">
                    <Link to='/'>{t('elonlar')}</Link>                                 
                </li>
                <li className="link-list__item">
                    <Link to='/'>{t('dokonlar')}</Link>
                </li>
                <li className="link-list__item">
                    <Link to='/'>{t('biznes')}</Link>
                </li>
                <li className="link-list__item">
                    <Link to='/'>{t('yordam')}</Link>
                </li>
            </ul>
            <div className="header__lang lang">
                <Link 
                    onClick={changeLanguage('ru')}
                    to='/' 
                    className="lang__ru">
                        Рус
                </Link>  
                <Link 
                    onClick={changeLanguage('uz')}
                    to='/' 
                    className="lang__uz">
                        O’z
                </Link>
            </div>
            <div className="header__log log">
                <Link to='/' className='log__item log__in'>{t('kirish')}</Link>   
                <Link to='/' className='log__item log__reg'>{t('reg')}</Link>
            </div>
        </div>
    );
}

export default HeaderTop;
