import React from 'react';
import Products from '../Products/Products';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Products/>
            <BusinessSummery/>
            <Reviews/>
        </div>
    );
};

export default Home;