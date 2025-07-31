import { Link } from "react-router-dom";
function ProductContainer({product}) {
  
  console.log(product);
  
  function trimContent(input) {

if (input.split(" ").length > 8) {

return input.split(" ").slice(0, 9).join(" ") + "...";

} else return input;

}
  return (
  <Link to={`singleproduct/${product.id}`}>
  <div className="product" style={{ marginTop:"10px"}}>
    <img src={product.image} alt="Product Image"/>
    <div className="content" >
         <h2>{trimContent(product.title)}</h2>
        <br/>
        <p>{product.price}</p>
       
    </div>

  </div>
  </Link>
  )
}

export default ProductContainer;
