import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    const [products,setProducts]=useState([])
    //add cardman.......................
    const [cart,setCart]=useState([]);

    useEffect(()=>{
       
       fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then(res=>res.json())
         .then(data=> setProducts(data))


    },
    []);

    const addToCart=(product)=>{
      console.log(product)
      //push
      const newCart=[...cart,product]
      setCart(newCart)
  }

    return (
        <div className='Shop-Container'>
           
           <div className='product-container'>
         {
          products.map(product=><Product product={product} handleAddToCart={addToCart}></Product>)   
         }


           </div>


           <div className='card-container'>
          <Cart cart={cart}></Cart>
           </div>
        </div>
    )
};

export default Shop;