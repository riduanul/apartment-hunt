import React from 'react';
import './Footer.css'
import { ImLocation } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';
import { AiFillFacebook, AiOutlineInstagram,AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div id='contact' className='text-white mt-5'>
            <div className="footer row">
                <div className="col-md-5">
                    <p> <ImLocation /> H#340 4th floor, Road #24,<br/>
                      &nbsp; &nbsp; New DOHS, Mohakhali, Dhaka, Bangladesh. <br/>
                      &nbsp; &nbsp; Phone: 017900000000 <br/>
                      &nbsp; &nbsp; E-mail: info@company.com
                    </p>
                </div>
                <div className="col-md-2">
                     <h6>Company</h6> <br/>
                     <p>About</p>
                     <p>Site Map</p>
                     <p>Support Center</p>
                     <p>Terms Conditions</p>
                     <p>Submit Listing</p>
                </div>
                <div className="col-md-2">
                    <h6>Quick Links</h6> <br/>
                    <p>Quick links</p>
                     <p>Rentals</p>
                     <p>Sales</p>
                     <p>Contact</p>
                     <p>Terms Conditions</p>
                     <p>Our Blog</p>
                    </div>
                <div className="col-md-3">
                    <h6>About us</h6> <br/>
                    We are the top real estate agency in Dhaka, with agents available to answer any question 24/7, <br/>
                    <AiFillFacebook/> <AiOutlineInstagram /> <SiLinkedin /> <AiFillYoutube/>

                    </div>

            </div>
        </div>
    );
};

export default Footer;