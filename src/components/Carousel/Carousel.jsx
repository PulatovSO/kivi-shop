import React, { useEffect, useState } from 'react';
import './Carousel.css';
import item1 from '../../assets/images/item1.png';
import item2 from '../../assets/images/item2.png';
import item3 from '../../assets/images/item3.png';

const Carousel = () => {

    const [slide, setSlide] = useState(0);

    let style = {
        transform: `translateX(-${slide}%)`
    }

    useEffect(() => {
        setTimeout(() => {
            if (slide == 0) setSlide(16.5)
            if (slide == 16.5) setSlide(33) 
            if (slide == 33) setSlide(50) 
            if (slide == 50) setSlide(0)
        }, 6000);
    }, [slide]);

    return (
        <div className="carousel-bottom">
            <div style={style} className="carousel__inner">
                <div className="carousel__slide">
                    <h3 className="carousel__header">
                        Техника Apple <br /> 
                        по доступным <br />
                        ценам
                    </h3>
                    <a href='/' className="carousel__ads">987 обьявлениий</a>
                    <img className='carousel__image' src={item1} alt="image" />
                </div>
                <div className="carousel__slide">
                    <h3 className="carousel__header">
                        Брендовые <br /> 
                        товары за <br />
                        копейки
                    </h3>
                    <a href='/' className="carousel__ads">987 обьявлениий</a>
                    <img className='carousel__image' src={item2} alt="image" />
                </div>
                <div className="carousel__slide">
                    <h3 className="carousel__header">
                        Все товары для <br />
                        офиса в одном <br />
                        месте
                    </h3>
                    <a href='/' className="carousel__ads">987 обьявлениий</a>
                    <img className='carousel__image' src={item3} alt="image" />
                </div>
                <div className="carousel__slide">
                    <h3 className="carousel__header">
                        Техника Apple <br /> 
                        по доступным <br />
                        ценам
                    </h3>
                    <a href='/' className="carousel__ads">987 обьявлениий</a>
                    <img className='carousel__image' src={item1} alt="image" />
                </div>
                <div className="carousel__slide">
                    <h3 className="carousel__header">
                        Брендовые <br /> 
                        товары за <br />
                        копейки
                    </h3>
                    <a href='/' className="carousel__ads">987 обьявлениий</a>
                    <img className='carousel__image' src={item2} alt="image" />
                </div>
                <div className="carousel__slide">
                    <h3 className="carousel__header">
                        Все товары для <br />
                        офиса в одном <br />
                        месте
                    </h3>
                    <a href='/' className="carousel__ads">987 обьявлениий</a>
                    <img className='carousel__image' src={item3} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
