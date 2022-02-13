import React from 'react';
import CarouselNav from '../components/CarouselNav/CarouseNav';
import Main from '../containers/Main/Main';
import More from '../containers/More/More';
import Carousel from '../components/Carousel/Carousel';

const Home = ({setKeyid}) => {
    return (
        <div>
            <CarouselNav />
            <Main setKeyid={setKeyid} />
            <Carousel />
            <More />
        </div>
    );
}

export default Home;
