import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom" ;
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login";
import RentDetails from "./Components/RentDetails/RentDetails";
import HomeDetails from "./Components/HomeDetails/HomeDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyRent from "./Components/MyRent/MyRent";
import BookingList from "./Components/BookingList/BookingList";
import AddRent from "./Components/AddRent/AddRent";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>
      <Router>
       <Switch> 
         <Route exact path='/'>
          <Home />
         </Route>
         <Route path='/login'>
           <Login></Login> 
          </Route>
          <PrivateRoute path='/homeDetail/:name'>
            <HomeDetails />
          </PrivateRoute>
          <PrivateRoute path='/rentDetails'>
            <RentDetails />
          </PrivateRoute>
          <Route path="/myRent">
            <MyRent />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path='/addRent'>
            <AddRent />
          </Route>
       </Switch>
     </Router>
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
