import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Product_view from './SingleProduct';
import './ProductDetails.css';

const First_section = () => {

    //all products
    const [Products,setProducts] = useState(fakeData.slice(0,8));
    return (
        <>
        <section className="Latest_products pt-4 pb-4">
            <div className="container-fluid">
                <div className="pr-lg-5 pr-md-3 pl-lg-5 pl-md-3">
                <h3 className="text-center">Latest Products</h3>
                    <div className="row shop_body pt-3">
                        {
                            Products.map( (Product,index) => <div className="col-lg-3 col-md-6 mb-3"><Product_view IdKey={index} product_content={Product} /></div> )
                        }
                    </div>
                </div>
            </div>
        </section>    
        </>
    );
};
export default First_section;

