import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Cart_Manage } from '../../../App';

const Product_view = (props) => {
   const Single_Product = props.product_content;
    const { category,name,price,img,key } = Single_Product;
    
    //set Products on cart
   //  const [Cart_Products,setCart_Products] = useContext(Cart_Manage);
   const [Cart_Products,setCart_Products] = useState([]);
   const Add_to_cart = (Get_CartProduct) => {
      setCart_Products([...Cart_Products,Get_CartProduct]);
    }
    console.log(Cart_Products);
    return(
        <>
          <div className="Product_container p-3 bg-white">
             <div className="product_category">
             </div>
             <div className="product_title">
                <Link to={`/${slugify(name)}/${key}`}><h6>{name.substring(0,45)}</h6></Link>
             </div>
             <div className="product_img">
             <Link to={`/${slugify(name)}/${key}`}><img src={img} /></Link>
             </div>
             <div className="row Price_Cart">
                <span className="col-4">${price}</span>
                <button className="col-7 add_to_cart" onClick={ () => Add_to_cart(Single_Product)}>add to cart</button>
             </div>
             <div className="Compare_Wishlist row">
                <span className="col-6"> &nbsp; wishlist</span>
                <span className="col-6"> &nbsp; compare</span>
             </div>
          </div>
        </>
    )
}
export default Product_view;