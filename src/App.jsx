import { Children } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Product from "./ecommerce/component/Product";
import Home from "./ecommerce/Home";
import Singleproduct from "./ecommerce/component/Singleproduct";



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
    ]
  }
])

function App()
{
  return <RouterProvider router={router} />
}
export default App;