import React from "react"
import { Link } from "react-router-dom"
function Header(){
    return(
        <header>
            <h1>Ecommerce</h1>
            <ul style={{ color:"#fff" }}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li> <Link to="/whishlist">Whishlist</Link></li>


            </ul>
            </header>
    )
}
export default Header