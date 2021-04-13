import {React, createContext, useState } from 'react';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import Main_Header from './Components/Home/Header/MainHeader';
import LatestProduct from './Components/Home/LatestProduct/LatestProduct';
import Product_details from './Components/Home/LatestProduct/Productdetails';
import Login from './Components/Login/LoginRegistration';

export const User_Information = createContext();
export const Cart_Manager = createContext();

function App() {

  const [User_Info,set_User_Info] = useState({});
  const [Cart_info,setCart_info] = useState([]);

  return (
    <User_Information.Provider value={[User_Info,set_User_Info]}>
    <Cart_Manager.Provider value={[Cart_info,setCart_info]}>
      <Switch>
        <Route exact path="/">
          <Main_Header />
          <LatestProduct />
        </Route>
        <Route path="/signin">
        <Main_Header />
          <Login/>
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
    </Cart_Manager.Provider>    
    </User_Information.Provider>
  );
}

export default App;
