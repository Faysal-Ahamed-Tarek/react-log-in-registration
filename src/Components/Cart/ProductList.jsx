import React from 'react';
import './cart.css';

const Product_listing = (props) => {
    const {Decrement, Increment, Product_Quantity,CartProduct} = props;
    const {name,price,img} = CartProduct;
    return(
        <>
        <div className="row">
            <div className="col-2">
                <img src={img} className="w-100" />
            </div>
            <div className="col-3">
                <p>{name.substring(0,55)}</p>
            </div>
            <div className="col-2 quantity_box">
            <button className="w-100"><span onClick={Increment}><i class="fa fa-plus" aria-hidden="true"></i></span>{Product_Quantity}<span onClick={Decrement}><i class="fa fa-minus" aria-hidden="true"></i></span></button>
            </div>
            <div className="col-2">
                <p className="text-center">$ {price}</p>
            </div>
            <div className="col-2">
                <p className="text-center">Total</p>
            </div>
            <div className="col-1">
                <span className="remove_btn"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
        </div>
        
        </>
    )
}
export default Product_listing;