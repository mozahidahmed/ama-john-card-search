import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;

    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping =shipping+product.shipping;
    }
     const tax=parseFloat((total  * 0.1).toFixed(2));
     const grandTotal=total+shipping+tax;



    return (
        <div className='cart'> 
             <h2>Order Summary</h2>
           <h3>Total Cart : {cart.length}</h3>
            
            <h3>Total Price:${total}</h3>
            <h3>Total Shipping:{shipping}</h3>
            <h3>Tax:{tax}</h3>
            <h3>Grand Total:{grandTotal}</h3>
        </div>
    );
};

export default Cart;