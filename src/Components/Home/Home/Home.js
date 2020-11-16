import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HouseRent from '../HouseRent/HouseRent';
import NavBar from '../NavBar/NavBar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <HouseRent></HouseRent>
            <Service />
            <Footer />
        
        </div>
    );
};

export default Home;