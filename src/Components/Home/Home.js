import React from 'react';
import Banner from './Banner/Banner';
import Extra1 from './Extra-1/Extra1';
import Search from './Search/Search';

import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Search></Search>
            <Services></Services>
            <Extra1></Extra1>
        </div>
    );
};

export default Home;
