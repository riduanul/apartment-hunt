import React from 'react';
import apartment1 from '../../../images/logos/apartment 1.png';
import apartment2 from '../../../images/logos/affordable 1.png';
import apartment3 from '../../../images/logos/lessee 1.png';
import './Service.css'

const Service = () => {
    return (
        <div className='container'>
            <div className=" container text-center mt-5">
                <p style={{color:'green', fontWeight: '500'}}>Service</p>
                <h3 style={{color:'#16322E', fontWeight: '800', marginBottom:'80px'}} >We're an urgency tailored to all <br/> client's needs that always delivers </h3> 
            </div>
            <div className="service row d-flex text-center">
               <div className="col-md-4">
                    <img src={apartment1} alt='pic' width='80'/> 
                    <h4 style={{marginTop: '20px'}}> Wide Range of Properties</h4>
                    <p>With a robust selection of popular properties on hand, as well as leading properties from experts</p>
               </div>
               <div className="col-md-4">
                    <img src={apartment2} alt='pic' width='80'/>
                    <h4 style={{marginTop: '20px'}}>Financing made easy</h4>
                    <p>Our Stress-free finance department that can find financial solution to save your money</p>
               </div>
               <div className="col-md-4">
                    <img src={apartment3} alt= 'pic' width='80'/>
                    <h4 style={{marginTop: '20px'}}>Trusted by thousands</h4>
                    <p>10 new offers everyday, 350 offers on site, trusted by community of thousands of users </p>
               </div>
            </div>
        </div>
    );
};

export default Service;