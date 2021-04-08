import React from 'react';
import './Header.css';
import {NavLink,Link} from "react-router-dom";

const Main_Header = () => {
    
    return(
        <div className='container-fluid bg-white Main_Header'>
            <div className="row pt-3 pb-3 pr-lg-5 pl-lg-5 pl-2 pr-2">
                <div className="col-2 logo">
                    <h4 className="text-left">Logo</h4>
                </div>
                <div className="col-7 Menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink activeClassName="active" to="/shop">Shop</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About us</NavLink>
                </div>
                <div className="col-3 SignIn-area row">
                    <div className="Price_count col-7">
                        <Link to="/cart" className="Cart_amount"><i class="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;$324 34</Link>                   
                    </div>
                    <div className="SignIn_btn col-5">
                    <Link to="/signin"><i class="fa fa-user" aria-hidden="true"></i>&nbsp; Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main_Header;