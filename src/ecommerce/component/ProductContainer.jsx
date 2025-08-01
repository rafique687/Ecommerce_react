import { Link } from "react-router-dom";
import {useContext, useState } from "react";

import { cartItem } from "../context/CartContext";
function ProductContainer({product}) {
  const { addToCart}=useContext(cartItem);

    // const [id,setid]=useState(product.id);
    // const [title,settitle]=useState(product.id);
    // const [price,setprice]=useState(product.price);

    // function handelCart()
    // {

    // }
  
  function trimContent(input) {

if (input.split(" ").length > 8) {

return input.split(" ").slice(0, 9).join(" ") + "...";

} else return input;

}
  return (
 
  <div className="product" style={{ marginTop:"10px"}}>
     <Link to={`singleproduct/${product.id}`}>
    <img src={product.image} alt="Product Image" style={{ width:"100%", height:"60%"}}/>
    </Link>
    <div className="content" >
         <h2>{trimContent(product.title)}</h2>
       
        <p>{product.price}</p>
       
    </div>

  {/* <input type="hidden" value={id} name="id"/>
  <input type="hidden" value={title} name="title"/>
  <input type="hidden" value={price} name="price"/> */}
  {/* <Link to={`cart/${product.id}`}><button className="custom-button">Add To Cart</button></Link> */}
  <button className="custom-button" onClick={()=>addToCart(product)}>Add To Cart</button>
  </div>

  )
}

export default ProductContainer;
 