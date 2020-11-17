import React, { useContext } from 'react';
import './RentDetails.css';
import logo from '../../images/logos/Logo.png';
import { UserContext } from '../../App';
import { FaShoppingCart,FaPlus } from 'react-icons/fa';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const RentDetails = () => {
    const [loggedInUser] = useContext(UserContext)
    console.log(loggedInUser);
    return (
        <div className='container'>
            <div className="top row">
                <div className="col-md-3 logo-top">
                    <Link to='/'><img src={logo} alt="logo" width="100" /></Link>
                </div>
                <div className="col-md-4 mt-5 ml-0">
                    <h4>Add Rent House</h4>
                </div>
                <div className="col-md-4 mt-4  d-flex align-items-center justify-content-end"> 
                 <div><img className='rounded-circle' src={loggedInUser.photoURL} alt="" width='45'/></div>
                    <div><h6>{loggedInUser.displayName}</h6></div>
                </div>

            </div>
            <div className="sideBar">
            <ul> 
               <Link to="/bookingList"><p> <FaShoppingCart/> Booking List</p> </Link>
               <Link to="addRent"><p> <FaPlus/> Add Rent House</p> </Link>
               <Link to="myRent"><p> <FcHome/> My Rent</p></Link>
                    
                </ul>
            </div>
        </div>
    );
};

export default RentDetails;