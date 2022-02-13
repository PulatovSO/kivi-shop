import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './More.css';

const More = () => {

    const [product, setProduct] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    const [reversed, setReversed] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    const [priced, setPriced] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    const [More, setMore] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    const [current, setCurrent] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    const [activeTab, setActiveTab] = useState(false);

    const setToAsc = () => {
        setCurrent(product)
        setActiveTab(false)
    }

    const setToDesc = () => {
        setCurrent(reversed)
        setActiveTab(true)
    }

    const setToPrice = () => {
        setCurrent(priced)
        setActiveTab(null)
    }

    const showMore = () => {
        setCurrent(More)
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=4')
            .then(function(response) {
                setProduct({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(function(error) {
                setProduct({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })

        axios.get('https://fakestoreapi.com/products?limit=4')
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

        axios.get('https://fakestoreapi.com/products/category/jewelery')
            .then(function(response) {
                setReversed({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(function(error) {
                setReversed({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })

        axios.get('https://fakestoreapi.com/products/category/electronics?limit=4')
            .then(function(response) {
                setPriced({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(function(error) {
                setPriced({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })

        axios.get('https://fakestoreapi.com/products?limit=8')
            .then(function(response) {
                setMore({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(function(error) {
                setMore({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
    }, []);

    return (
        <div className='more'>
            <div className="container">
                <div className="cards__category-wrap">
                    <button onClick={setToAsc} className={activeTab === false ? 'cards__category activeTab' : 'cards__category'} href="#">Просмотренные</button>
                    <button onClick={setToDesc} className={activeTab ? 'cards__category activeTab' : 'cards__category'} href="#">Выбор редакции</button>
                    <button onClick={setToPrice} className={activeTab === null ? 'cards__category activeTab' : 'cards__category'} href="#">Сниженные цены</button>
                </div>
                <div className="cards">
                    {
                        current.data.map(data => (
                            <div key={data.id} className="cards__card card">
                                <img className='card__image' src={data.image} alt="card-image" />
                                <h3 className="card__title">{data.title}</h3>
                                <p className="card__time">Вчера 22:55</p>
                                <span className="card__price">{Math.floor(data.price)} 000 sum</span>
                            </div>
                        ))
                    }
                </div>
                <div className="more__btn-wrap">
                    <button onClick={showMore} className="more__btn">Покозать еще<i className='bx bx-chevron-down'></i></button>
                </div>
            </div>
        </div>
    );
}

export default More;
