import React from 'react';
import './BookingList.css';
import RentDetails from '../RentDetails/RentDetails';

const BookingList = () => {
    return (
        <div>
            <RentDetails />
            <div className="booking-list booking-bg">
                 
              <div>
              <table className="table table-borderless booking-item-bg">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col"> Name</th>
                <th className="text-secondary" scope="col">Email Id</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Message</th>
                <th className="text-secondary" scope="col">status</th>
              
            </tr>
            </thead>
            <tbody>
               
                        
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                   
                    </tbody>
                </table>
              </div>
            </div>
        </div>
    
    );
};

export default BookingList;