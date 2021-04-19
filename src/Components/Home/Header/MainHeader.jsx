import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import {NavLink,Link} from "react-router-dom";
import { Cart_Manager } from '../../../App';

const Main_Header = () => {
    
    //add to cart state
    const [Cart_info,setCart_info] = useContext(Cart_Manager);
    
    //Cart Calculation
    const ProductTotalPrice = Cart_info.reduce( (initialValue,Total) => initialValue + Total.price , 0 );
    
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
                        <Link to="/cart" className="Cart_amount"><i class="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;
                        {
                            Object.keys(Cart_info).length === 0 ? ("Cart") : ( ` $${ProductTotalPrice.toFixed(1)}`)
                        }
                        </Link>                   
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