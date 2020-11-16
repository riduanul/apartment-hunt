import React from "react";
import Card from "react-bootstrap/Card";
import './Apartment.css';
import {FaBed, FaBath } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { Link } from "react-router-dom";

const Apartment = (props) => {
  const { img, name, location, bedroom, bathroom, price } = props.apartment;
  return (
    <div className='m-auto'>
      <Card className ='img-style '>
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title style={{fontWeight:'800'}}>{name}</Card.Title>
          <Card.Text>
            <small className="text-muted"><ImLocation /> {location}</small> <br />
            <div className="row d-flex text-muted">
                <div className="col">
                
                <small> <FaBed /> {bedroom} </small> 
            
                </div>
                <div className="col">
                
                <small> <FaBath /> {bathroom} </small>
            
                </div>
            </div>
            <div className="row d-flex align-items-center mt-3">
                <div className="col">
                
                <h3 style={{fontWeight: '800', color: '#275A53'}}>${price}</h3>
            
                </div>
                <div className="col">
                
                <Link to={`homeDetail/${name}`}><button className="btn btn-primary ">View Details</button></Link>
            
                </div>
            </div>
            
            
          </Card.Text>
        </Card.Body>
    </Card>
    </div>
  );
};

export default Apartment;
