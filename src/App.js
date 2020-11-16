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

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState()
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
          <Route path='/homeDetail/:name'>
            <HomeDetails />
          </Route>
          <Route path='/rentDetails'>
            <RentDetails />
          </Route>

       </Switch>
     </Router>
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
