import { Children } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Product from "./ecommerce/component/Product";
import Home from "./ecommerce/Home";

import Singleproduct from "./ecommerce/pages/Singleproduct";
import About from "./ecommerce/pages/About";
import Whislist from "./ecommerce/pages/whishlist";
import Cart from "./ecommerce/pages/Cart";




const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        index:true,
        element:<Product/>,
        
      },   
      {
        path:"/singleproduct/:id",
        element:<Singleproduct/>,
      } ,
       {
        path :"/about",
        element:<About/>,
       },
       {
        path:"/whishlist",
        element:<Whislist/>
       },
       {
        path:"/cart/:id",
        element:<Cart/>,
       }  
    ]
   
  },
  
 
])

function App()
{
  return <RouterProvider router={router} />
}
export default App;