import {React, createContext, useState } from 'react';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Main_Header from './Components/Home/Header/MainHeader';
import LatestProduct from './Components/Home/LatestProduct/LatestProduct';
import Product_details from './Components/Home/LatestProduct/Productdetails';
import Login from './Components/Login/LoginRegistration';
import User_Details from './Components/UserDetails/User';


export const User_Information = createContext();
// export const Cart_Manage = createContext();

function App() {
  const [User_Info,set_User_Info] = useState({});
  // const [Cart_Products,setCart_Products] = useState({});
  return (
    // <Cart_Manage.Provider value={[Cart_Products,setCart_Products]}>
    <User_Information.Provider value={[User_Info,set_User_Info]}>
      <Switch>
        <Route exact path="/">
          <Main_Header />
          <LatestProduct />
        </Route>
        <Route path="/signin">
        <Main_Header />
          <Login/>
        </Route>
        <Route path='/User-details'>
          <User_Details/>
        </Route>
        <Route path='/:ProductName/:key'>
          <Main_Header />
          <Product_details/>
        </Route>
        <Route path="/cart">
          <Main_Header />
          <Cart/>
        </Route>
      </Switch>
    </User_Information.Provider>
    // </Cart_Manage.Provider>  
  );
}

export default App;
