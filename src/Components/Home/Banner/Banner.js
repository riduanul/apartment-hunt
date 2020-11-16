import React from 'react';
import './Banner.css';



const Banner = () => {
   
    return (
        <div >
            <div className="banner-bg bg-dark mt-0 pt-0">
                <br/> <br/> <br/> <br/>
            <h1 className="text-center text-white">FIND YOUR HOUSE RENT</h1> <br/>
            <div class="wrap">
                <div class="search">
                 <input type="text" class="searchTerm" placeholder="Search" />
                    <button type="submit" class="searchButton"> Find Now
                    </button>
                 </div>
            </div>
            
        </div>
        </div>
    );
};

export default Banner;