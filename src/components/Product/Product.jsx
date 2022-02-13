import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Product.css';

const Product = ({keyid}) => {

    const [current, setCurrent] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${keyid}`)
            .then(function(response) {
                setCurrent({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(function(error) {
                setCurrent({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
    }, []);

    const images = [
        {
            original: `${current.data.image}`,
            thumbnail: `${current.data.image}`,
        },
        {
            original: `${current.data.image}`,
            thumbnail: `${current.data.image}`,
        },
        {
            original: `${current.data.image}`,
            thumbnail: `${current.data.image}`,
        },
        {
            original: `${current.data.image}`,
            thumbnail: `${current.data.image}`,
        },
        {
            original: `${current.data.image}`,
            thumbnail: `${current.data.image}`,
        },
        {
            original: `${current.data.image}`,
            thumbnail: `${current.data.image}`,
        },
      ];

    return (
        <div className='product'>
            <div className="container">
                <div className="product__current">
                    <h3 className="product__title">{current.data.title}</h3>
                    <div className="product__inner">
                        <div className="product__left">
                            {/* <img className='product__image' src={current.data.image} alt="card-image" /> */}
                            <ImageGallery className="product__gallery" items={images} />
                        </div>
                        <div className="product__right">
                            <div className="product__detail">
                                <span className='product__det product__id'>Артикул: 4418970</span>
                                <span className="product__det product__update">обновлено: 28.04.17 добавлено: 28.04.17</span>
                            </div>                                                     
                            <h3 className="product__price">{Math.floor(current.data.price)} 999 y.e</h3>
                            <p className="product__address">Ташкент, Ташкентская область, Юнусабадский район </p>
                            <div className="product__btn-wrap">
                                <span className="product__btn-num">99891 166 ****</span>
                                <button className="product__btn">Покозать польностю</button>
                            </div>
                            <div className="product__btn-wrap">
                                <span className="product__btn-num">99891 166 ****</span>
                                <button className="product__btn">Покозать польностю</button>
                            </div>
                            <p className="product__author">Автор обьявлении: <span>Зухриддин Темиров</span></p>
                            <div className="product__btns">
                                <button className="product__button">Написать автору</button>
                                <button className="product__button dark">Предложить свою цену</button>
                            </div>
                            <p className="product__desc">
                                {current.data.description}
                            </p>
                            <p className="product__desc">
                                Ремонт делолся из очень дорогова материяла. Дорогая класическая 
                                кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие 
                                люстры вовсех комнатах решодки на окнах. Теретория охранается. 
                                Всё предусмотренно для детей деские площядки качели итд. Торг наместе. 
                                Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом 
                                коплексе. Торопитесь.
                            </p>
                            <p className="product__view">
                                Просмотры:10958
                                <Link to='/'>Пожаловатся</Link>								                                         
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
