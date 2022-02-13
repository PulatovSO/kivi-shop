import React, { useState } from 'react';
import './CarouselNav.css';
import Table from '../Table/Table';
import Airplane from '../../assets/images/Airplane.svg';
import Briefcase from '../../assets/images/Briefcase.svg';
import Challenge from '../../assets/images/Challenge.svg';
import Gaming from '../../assets/images/Gaming.svg';
import Gifts from '../../assets/images/Gifts.svg';
import Maintenance from '../../assets/images/Maintenance.svg';
import Man from '../../assets/images/Man.svg';
import Store from '../../assets/images/Store.svg';
import Terminal from '../../assets/images/Terminal.svg';

const CarouselNav = () => {

    const [nav, setNav] = useState(false);
    const [navSlide, setNavSlide] = useState(0);

    const navHander = () => {
        nav ? setNav(false) : setNav(true)
    }

    const navSlidePrev = () => {
        if (navSlide <= 0) {
            setNavSlide(55)
        } else {
            setNavSlide(navSlide - 5)
        }
    }
    const navSlideNext = () => {
        if (navSlide >= 55) {
            setNavSlide(0)
        } else {
            setNavSlide(navSlide + 5)
        }
    }

    let style = {
        transform: `translateX(-${navSlide}%)`
    }

    console.log(nav)

    return (
        <div className='carousel'>
            <div className="carousel__buttons">
                <button onClick={navSlidePrev} className="carousel-btn btn__prev"><i className='bx bx-left-arrow-alt' ></i></button>
                <button onClick={navSlideNext} className="carousel-btn btn__next"><i className='bx bx-right-arrow-alt'></i></button>
            </div>
            <div className="wrapper container">
                <ul style={style} className="carousel__list">
                    <li onClick={navHander} className="carousel__item">
                        <img src={Airplane} alt="image" />
                        <p className="carousel__item-name">Автомобили</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Briefcase} alt="image" />
                        <p className="carousel__item-name"> Недвижимость</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Challenge} alt="image" />
                        <p className="carousel__item-name"> Электроника</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Gaming} alt="image" />
                        <p className="carousel__item-name"> Работа</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Gifts} alt="image" />
                        <p className="carousel__item-name">Личные вещи</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Maintenance} alt="image" />
                        <p className="carousel__item-name"> Дом и Сад</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Man} alt="image" />
                        <p className="carousel__item-name">Стройка и ремонт</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Store} alt="image" />
                        <p className="carousel__item-name"> Хобби и Спорт</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Terminal} alt="image" />
                        <p className="carousel__item-name"> Бизнес и услуги</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Airplane} alt="image" />
                        <p className="carousel__item-name">Автомобили</p>
                    </li>
                    <li onClick={navHander} onClick={navHander} className="carousel__item">
                        <img src={Briefcase} alt="image" />
                        <p className="carousel__item-name"> Недвижимость</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Challenge} alt="image" />
                        <p className="carousel__item-name"> Электроника</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Gaming} alt="image" />
                        <p className="carousel__item-name"> Работа</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Gifts} alt="image" />
                        <p className="carousel__item-name">Личные вещи</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Maintenance} alt="image" />
                        <p className="carousel__item-name"> Дом и Сад</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Man} alt="image" />
                        <p className="carousel__item-name">Стройка и ремонт</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Store} alt="image" />
                        <p className="carousel__item-name"> Хобби и Спорт</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Terminal} alt="image" />
                        <p className="carousel__item-name"> Бизнес и услуги</p>
                    </li>
                    <li onClick={navHander} className="carousel__item">
                        <img src={Airplane} alt="image" />
                        <p className="carousel__item-name">Автомобили</p>
                    </li>
                    <li onClick={navHander} onClick={navHander} className="carousel__item">
                        <img src={Briefcase} alt="image" />
                        <p className="carousel__item-name"> Недвижимость</p>
                    </li>
                </ul>
            </div>
                <Table nav={nav} />
        </div>
    );
}

export default CarouselNav;
