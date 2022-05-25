import React from 'react';
import Products from '../Products/Products';
import BusinessSummery from './BusinessSummery';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Products/>
            <BusinessSummery/>
        </div>
    );
};

export default Home;