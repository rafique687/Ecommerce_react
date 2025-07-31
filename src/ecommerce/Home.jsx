import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Product from "./component/Product.jsx";
import {Outlet} from "react-router-dom";

import "./ecommerce.css";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Product/> */}
      <Footer />
  </>
  );
}
export default Home;
