import { useEffect, useState } from "react";
//import axios from "axios";
import { useParams } from "react-router-dom";
import ProductContainer from "./ProductContainer";

function Singleproduct() {
     const {id}= useParams()
  const [products, setProduct] = useState({});

  useEffect(() => {
    if(id){
    fetchData(id);
    }
  },[id] );

 // console.log();

 console.log(id);
  


  async function fetchData(id) {
    const response = await fetch("https://fakestoreapi.in/api/products/" +id);
     const result = await response.json();
     //const result = await axios(`https://fakestoreapi.in/api/products/${id}`);
     console.log(result.product);
    setProduct(result.product);
  }
 // console.log(products);
  return (
    <>
    <div className="product-wrapper">
        <div className="colfirst">
            <img  src={products.image}  style={{ width:"100%", height:"100%"}}/>
        </div>
        <div className="colsec">
            <h2>{products.title}</h2>
             <h1>Model : {products.model}</h1>
            <h3>Price :{products.price}</h3>
            <p>
                <h3>Descript</h3>
            { products.description}
            </p>
            <button className="custom-button">Add To Cart</button>

        </div>
    </div>
    </>
  );
}
export default Singleproduct;
