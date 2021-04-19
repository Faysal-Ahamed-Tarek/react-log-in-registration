import React, { useContext, useState } from 'react';
import { Cart_Manager } from '../../App';
import './cart.css';

const Product_listing = (props) => {
    const {CartProduct} = props;
    const {name,price,img,Quantity} = CartProduct;

        //Product Total Price update
        const [Cart_info,setCart_info] = useContext(Cart_Manager);
        //quantity
        let Product_Quantity = Quantity;

        //single PRoduct total price
        const TotalPrice = (price * Product_Quantity).toFixed(2);

        //increment quantity
        const Increment = () =>{
            Product_Quantity = Product_Quantity + 1 ;
            Cart_info.map( (Product) =>Product.Quantity = Product_Quantity);
        }

        //increment quantity
        const Decrement = () =>{
            if(Product_Quantity > 1 ){
                Product_Quantity = Product_Quantity - 1 ;
            }
        }
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
                <p className="text-center">${TotalPrice}</p>
            </div>
            <div className="col-1">
                <span className="remove_btn" onClick={() => props.RemoveProduct(CartProduct)}><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
        </div>
        
        </>
    )
}
export default Product_listing;