import { Children } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Product from "./ecommerce/component/Product";
import Home from "./ecommerce/Home";
import Singleproduct from "./ecommerce/component/Singleproduct";
import About from "./ecommerce/component/About";
import Whislist from "./ecommerce/component/whishlist";
import Cart from "./ecommerce/component/Cart";




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
        path:"singleproduct/:id",
        element:<Singleproduct/>,
      } ,
       {
        path :"about",
        element:<About/>,
       },
       {
        path:"whishlist",
        element:<Whislist/>
       },
       {
        path:"cart",
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