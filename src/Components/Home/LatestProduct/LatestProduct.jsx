import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../../fakeData';
import Product_view from './SingleProduct';
import './ProductDetails.css';
import { toast , ToastContainer} from 'react-toastify';

const First_section = () => {

    //add to cart state
    const [Cart_Products,setCart_Products] = useState([]);

    //all products
    const [Products] = useState(fakeData.slice(0,8));

    //add product on cart
    const Add_to_cart = (NewProduct) => {
        const Find_Same_Product = Cart_Products.find((Product) => Product.key === NewProduct.key);
        if(Find_Same_Product){
            const notify = () => {
                toast.warning(" This Product already Added On Your Cart");
            }
            notify();
        }else{
            setCart_Products([...Cart_Products,NewProduct]);
            const notify = () => {
                toast.success("Product Has Been Added");
            }
            notify();
        }
     }
     //add cart product on local storage
     useEffect(() => {
         const DefaultCart = localStorage.getItem("set_cart_product") || [];
         setCart_Products(JSON.parse(DefaultCart));
     },[]);

     useEffect(() => {
        localStorage.setItem("set_cart_product", JSON.stringify(Cart_Products))
     },[Cart_Products]);
     
    return (
        <>
        <ToastContainer autoClose={3000} hideProgressBar={false} />
        <section className="Latest_products pt-4 pb-4">
            <div className="container-fluid">
                <div className="pr-lg-5 pr-md-3 pl-lg-5 pl-md-3">
                <h3 className="text-center">Latest Products</h3>
                    <div className="row shop_body pt-3">
                        {
                            Products.map( (Product,index) => <div className="col-lg-3 col-md-6 mb-3"><Product_view IdKey={index} product_content={Product} Add_to_cart={Add_to_cart} /></div> )
                        }
                    </div>
                </div>
            </div>
        </section>    
        </>
    );
};
export default First_section;

