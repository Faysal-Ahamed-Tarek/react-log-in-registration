import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../../fakeData';
import './ProductDetails.css';

const Product_details = () => {
    //quantity
    const [Quantity,setQuantity] = useState(0);

    const {key} = useParams();
    const Get_Product = fakeData.find(val => val.key === key);
    const {name,img,price,stock,features,category} = Get_Product;
    const Increment = () => {
        setQuantity(Quantity + 1);
    }
    const Decrement = () => {
        setQuantity(Quantity - 1);
    }
    return(
        <>
        <div className="container-fluid pt-5">
        <div className="pr-lg-5 pr-md-3 pl-lg-5 pl-md-3 pr-2 pl-2">
            <div className="Product_details p-2 p-lg-4 bg-white row">
                <div className="col-lg-4 col-12">
                    <img className="w-100" src={img} />
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <h5 style={{color:"#faa500"}}>{name}</h5>
                    {
                        features.map(val => <li>{val.description} : {val.value}</li>)
                    }
                    <h6 className="pt-3">Price : ${price}</h6>
                    <h6>Category : {category}</h6>
                    <h6>Stock : {stock} products in avaiable</h6>
                    <div className="btn_area row pt-3">
                        <div className="quantity_box col-lg-2 col-md-3">
                        <h6 className="mb-1">Quantity</h6>
                            <button className="w-100"><span onClick={Increment}><i class="fa fa-plus" aria-hidden="true"></i></span>{Quantity}<span onClick={Decrement}><i class="fa fa-minus" aria-hidden="true"></i></span></button>
                        </div>
                        <div className="col-lg-3 add_to_cart mt-3 col-md-4">
                            <button>Add To Cart</button>
                        </div>
                        <div className="col-lg-3 Buy_now  mt-3 col-md-4">
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
              </div>    
            </div>
        </div>
        </>
    )
}
export default Product_details;