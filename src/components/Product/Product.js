import React from 'react';
import './Product.css';
const Product = (props) => {

    const{product,handleAddToCart}=props
    //console.log(props.product);
   // const {name,img,seller,price,ratings}=props.product
    const {name,img,seller,price,ratings}=product

    return (
        <div className='product'>
            <img src={img} alt=""></img>
                    
            <div className='name'>
               <h3>Name:{name}</h3> 
               <h3>Price:{price}</h3>
               <h3>Seller:{seller}</h3>
               <h3>Ranting{ratings}</h3>
               
            </div>
<button onClick={()=>handleAddToCart(product)} className='Btn-my'>
    <h3>Add To Craft</h3>
</button>
        

        
        
        </div>
            
      
    );
};

export default Product;