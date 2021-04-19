import { React , useContext, useEffect, useState } from 'react';
import { Cart_Manager } from '../../App';
import './cart.css';
import Product_listing from './ProductList';

const Cart =() => {

    //Remove From Cart
    const [Cart_info,setCart_info] = useContext(Cart_Manager);

    //Cart Calculation
    // const ProductTotalPrice = Cart_info.reduce( (initialValue,Total) => initialValue + Total.price , 0 );

    //remove item from cart
    const RemoveProduct = (removeItem) => {
        const Cart_item = Cart_info.filter( (res) => res.key !== removeItem.key );
        setCart_info(Cart_item);
    }
    //add product after removing
    useEffect( () => {
        localStorage.setItem("set_cart_product", JSON.stringify(Cart_info));
    },[Cart_info]);


    return(
        <div className="container-fluid pt-5 pb-3">
            <div className="pr-lg-5 pr-md-3 pl-lg-5 pl-md-3">
                <div className="row bg-white p-3 pt-4 cart_box">
                    <div className="Cart_item col-9">
                        <div className="row pt-2">
                            <div className="col-2">
                                <h5 className="text-align">Image</h5>
                            </div>
                            <div className="col-3">
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
                            <div className="col-1">
                                <span></span>
                            </div>
                        </div>
                        {
                          Cart_info &&  Cart_info.map( res => <Product_listing CartProduct={res} RemoveProduct={RemoveProduct}/> )
                        }
                    </div>
                    <div className="col-3 pt-2">
                        <div className="Cart_calculate p-3">
                            <h5 className="text-center">Order Summery</h5 >
                            <div className="row pt-2">
                                <p className="col-8 text-left">Total :</p>
                                <p className="col-4 text-right">$000</p>
                            </div>
                            <div className="row pt-2">
                                <p className="col-8 text-left">Shipping Cost :</p>
                                <p className="col-4 text-right">$000</p>
                            </div>
                            <div className="row pt-2 pb-3">
                                <p className="col-8 text-left">Tax :</p>
                                <p className="col-4 text-right">$000</p>
                            </div>
                            <div className="row pt-2 border-top">
                                <h5 className="col-8 text-left">Subtotal :</h5>
                                <p className="col-4 text-right">$000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;