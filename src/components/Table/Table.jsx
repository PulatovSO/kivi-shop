import React from 'react';
import './Table.css';

const Table = ({nav}) => {
    return (
        <div className='carousel'>
            <div className="container">
                <div className={nav ? 'table__list table__list-active' : 'table__list'}>
                    <ul>
                        <li>Телефоны</li>
                        <li>Компьютеры</li>
                        <li>Фото / видео</li>
                        <li>Тв / видеотехника</li>
                        <li>Аудиотехника</li>
                    </ul>
                    <ul>
                        <li>Игры и игровые приставки</li>
                        <li>Техника для дома</li>
                        <li>Техника для кухни</li>
                        <li>Климатическое оборудование</li>
                        <li>Индивидуальный уход</li>
                    </ul>
                    <ul>
                        <li>Аксессуары и комплектующие</li>
                        <li>Прочая электроника</li>
                        <li>Телефоны</li>
                        <li>Компьютеры</li>
                        <li>Фото / видео</li>
                    </ul>
                    <ul>
                        <li>Телефоны</li>
                        <li>Компьютеры</li>
                        <li>Фото / видео</li>
                        <li>Тв / видеотехника</li>
                        <li>Аудиотехника</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Table;
