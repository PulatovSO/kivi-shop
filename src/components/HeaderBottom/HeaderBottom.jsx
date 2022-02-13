import React from 'react';
import './HeaderBottom.css';
import i18n from '../../I18n';
import { useTranslation } from "react-i18next";

const HeaderBottom = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='header__bottom'>
            <form className='Header__search-form search-form'>
                <select className='search-form__category' name="category" id="category">
                    <option value="goods">{t('barchasi')}</option>
                </select>
                <input className='search-form__search' type="search" placeholder={t('placeholder')}/>
                <select className='search-form__area' name="area" id="area">
                    <option value="uz">{t('boylab')}</option>
                </select>
                <button className="search-form__btn btn">{t('izlash')}</button>
            </form>
            <div className="header__add">
                <button className="header__add-btn">+</button>
                <p className='header__add-text'>{t('qoshish')}</p>
            </div>
        </div>
    );
}

export default HeaderBottom;
