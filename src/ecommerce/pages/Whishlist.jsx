import { useContext} from "react";
import { cartItem } from "../context/CartContext";
import { WishlistItems } from "../context/WishlistItems.jsx"

function Whishlist()
{
      const {whishlistprod}=useContext(WishlistItems);
  
    return( 
        <>
        <div className="product-wrapper">
        {/* {cart.length===0 && <h1>Cart is Empty</h1>} */}
      { whishlistprod.map((whisItem,key)=>{
        return(
          <div style={{border:"1px solid #000"}} key={key}>
        <div className="colcart">
             <h1>Model : {whisItem.model}</h1>
            <img  src={whisItem.image}  style={{ width:"30%", height:"30%"}}/>
        </div>
        
         </div>

        )
      })}
        

    </div>
        </>
    )
}
export default Whishlist
