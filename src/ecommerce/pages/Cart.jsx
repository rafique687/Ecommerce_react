import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
function Cart()
{
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
    return(
        <>
        <div className="product-wrapper">

        <div style={{border:"1px solid #000"}}>
        <div className="colcart">
             <h1>Model : {products.model}</h1>
            <img  src={products.image}  style={{ width:"30%", height:"30%"}}/>
        </div>
        <div className="colcart">
                      
           <h3>Price :{products.price}</h3>
         </div>
         </div>
    </div>
        </>
    )
}
export default Cart
