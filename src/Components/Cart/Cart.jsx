import { React , useEffect, useState } from 'react';
import './cart.css';
import Product_listing from './ProductList';

const Cart =() => {

    //add to cart state
    const [Cart_Info,setCart_Info] = useState(() => {
        const DefaultProduct = localStorage.getItem("set_cart_product");
        return JSON.parse(DefaultProduct);
    });

    //remove item from cart
    const RemoveProduct = (removeItem) => {
        console.log(removeItem);
        const Cart_item = Cart_Info.filter( (res) => res.key !== removeItem.key );
        setCart_Info(Cart_item);
    }
    useEffect( () => {
        localStorage.setItem("set_cart_product",JSON.stringify(Cart_Info));
    },[Cart_Info]);

    //quantity
    const [Product_Quantity,setProduct_Quantity] = useState(1);

    //increment quantity
    const Increment = () =>{
        setProduct_Quantity(Product_Quantity + 1);
    }
    //increment quantity
    const Decrement = () =>{
        if(Product_Quantity > 1 ){
            setProduct_Quantity(Product_Quantity - 1);
        }
    }
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
                          Cart_Info &&  Cart_Info.map( res => <Product_listing CartProduct={res} Decrement={Decrement} Increment={Increment} Product_Quantity={Product_Quantity} RemoveProduct={RemoveProduct}/> )
                        }
                    </div>
                    <div className="col-3 pt-2">
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