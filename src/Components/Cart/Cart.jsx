import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './cart.css';
import Product_listing from './ProductList';

const Cart =() => {
    const [CartProducts,setCartProducts] = useState(fakeData.slice(0,10));
    //quantity
    const [Product_Quantity,setProduct_Quantity] = useState(0);
    //increment quantity
    const Increment = () =>{
        
    }
    //increment quantity
    const Decrement = () =>{

    }
    return(
        <div className="container-fluid pt-5 pb-5">
            <div className="pr-lg-5 pr-md-3 pl-lg-5 pl-md-3">
                <div className="row bg-white p-3 pt-4">
                    <div className="Cart_item col-9">
                        <div className="row pt-2">
                            <div className="col-2">
                                <h5 className="text-align">Image</h5>
                            </div>
                            <div className="col-4">
                                <h5 className="text-center">Product Name</h5>
                            </div>
                            <div className="col-2">
                            <h5 className="text-center">Quantity</h5>
                            </div>
                            <div className="col-2">
                                <h5 className="text-center">Price</h5>
                            </div>
                            <div className="col-2">
                                <h5 className="text-center">Total</h5>
                            </div>
                        </div>
                        {
                            CartProducts.map( res => <Product_listing CartProducts={res} Decrement={Decrement} Increment={Increment} Product_Quantity={Product_Quantity}/> )
                        }
                    </div>
                    <div className="col-3">
                        <div className="Cart_calculate pt-2 pb-3">
                            <h5 className="text-center">Order Summery</h5 >
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;