import React from 'react';
import fakeData from '../../../FakeData/FakeData';
import CardDeck from 'react-bootstrap/CardDeck'
import Apartment from '../Apartment/Apartment';

const HouseRent = () => {
    const apartments = fakeData;
    return (
        <div className='text-center mt-5'>
            <p style={{color:'green', fontWeight: '500'}}>House Rent</p>
            <h3 style={{color:'#16322E', fontWeight: '800', marginBottom:'80px'}} >Discover the latest Rent <br/> available today </h3> 
          <div className="container">
          <CardDeck>
                {
                    apartments.map((apartment) => (
                    <Apartment key={apartment.id} apartment={apartment}></Apartment>
                    ))
                }
            </CardDeck>
          </div>

        </div>
    );
};

export default HouseRent;