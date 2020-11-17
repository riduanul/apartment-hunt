import React from 'react';
import RentDetails from '../RentDetails/RentDetails';
import './MyRent.css';

const MyRent = () => {
    return (
        <div>
            
                 <RentDetails />
            
            <div className='my-rent my-rent-bg'>
                <div>
                <table className="table table-borderless rent-item-bg">
            <thead>
              <tr>
               <th className="text-secondary text-left" scope="col"> House Name</th>                <th className="text-secondary" scope="col">Price</th>
               <th className="text-secondary" scope="col">Action</th>
              
            </tr>            
           </thead>            
           <tbody>                                     
                    <tr>
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

export default MyRent;