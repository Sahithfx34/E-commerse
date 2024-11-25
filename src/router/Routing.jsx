import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Place_order from "../pages/Place_order";
import Task from "../Task/Task";
import NotFound from "../pages/NotFound";
import MyOrders from "../pages/MyOrders";

const Routing=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/place-order" element={<Place_order/>}/>
            <Route path="/myorders" element={<MyOrders/>}/>
            <Route path="/task" element={<Task/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routing;