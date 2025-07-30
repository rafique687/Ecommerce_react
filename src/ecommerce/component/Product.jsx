import { useEffect, useState } from "react";
import ProductContainer from "./ProductContainer";

function Product() {
  const [products, setproduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);



  async function fetchData() {
    const response = await fetch("https://fakestoreapi.in/api/products");
    const result = await response.json();
    setproduct(result.products);
  }
  console.log(products);
  return (
    <section className="product-wrapper">
      {products.map((obj) => {
        return <ProductContainer key={obj.id} product={obj} />;
      })}
    </section>
  );
}
export default Product;
