import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Product from "./component/Product.jsx";
import {Outlet} from "react-router-dom";
import { cartItem } from "../ecommerce/context/CartContext.jsx";

import "./ecommerce.css";
import { useState } from "react";

function Home() {
  const [cart,setCart]=useState([]);
  
  function addToCart(productToAdd){
    const productExists =cart.find(addedProducts => addedProducts.id===productToAdd.id);
    if(productExists){
      // 23456
    }
    else
    {
      setCart([...cart,productToAdd])
    }
  }
  return (
    <>
     <cartItem.Provider value={{cart,setCart,addToCart}}>
      <Header />
      <Outlet />
      {/* <Product/> */}
      <Footer />
      </cartItem.Provider>
  </>
  );
}
export default Home;
