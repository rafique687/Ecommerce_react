import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Product from "./component/Product.jsx";
import {Outlet} from "react-router-dom";
//import { whishlistItems } from "../ecommerce/context/whishlistItem.jsx"
import { cartItem } from "../ecommerce/context/CartContext.jsx";
import { WishlistItems } from "./context/WishlistItems.jsx"


import "./ecommerce.css";
import { useState } from "react";

function Home() {
  const [cart,setCart]=useState([]);
  const [whishlistprod,setwhichlist]= useState([]);
  
  function addToCart(productToAdd){
    const productExists =cart.find(addedProducts => addedProducts.id===productToAdd.id);
    if(productExists){
      // 23456
    }
    else
    {
      setCart([...cart,productToAdd]);
    }
  }

  function AddToWhislist(productToWhislist)
  {
    setwhichlist([...whishlistprod,productToWhislist]);
  }
  return (
    <>
    <WishlistItems.Provider value={{whishlistprod,setwhichlist,AddToWhislist}}>
   
     <cartItem.Provider value={{cart,setCart,addToCart}}>
      <Header />
      <Outlet />
      {/* <Product/> */}
      <Footer />
      </cartItem.Provider>
      </WishlistItems.Provider>
  </>
  );
}
export default Home;
