import React from 'react';
import RentDetails from '../RentDetails/RentDetails';
import './AddRent.css';

const AddRent = () => {
    return (
        <div>
            <RentDetails />
           <div className="">
           <div className="  add-rent add-rent-bg ">
               <div className=" row d-flex item-bg">
               <div className="col-md-6 ">
                    <label>Service title</label><br/>
                    <input type="text" placeholder="Enter Title"/> <br/>
                    <label>Location</label><br/>
                    <input type="text" placeholder="Enter Location"/> <br/>
                    <label>No of bathroom</label><br/>
                    <input type="text"placeholder="Bathroom"/>
                </div>
                <div className="col-md-6">
                <label>Price</label> <br/>
                    <input type="text" placeholder="Enter Price"/><br/>
                    <label>No of Bedroom</label><br/>
                    <input type="text" placeholder="Bedrooms"/><br/>
                    <label>Thumbnail</label><br/>
                    <input type="send"/>
                </div>
                
               </div>
               <button className='submit-btn' type="submit"> Submit</button>
               
            </div>
           </div>
        </div>
    );
};

export default AddRent;