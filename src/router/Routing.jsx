import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Routing=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<Product/>}/>
        </Routes>
    )
}

export default Routing;