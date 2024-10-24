import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";
import { products } from "../assets/frontend_assets/assets";
import "../css/Product.css"
const Product = () => {
    const {id} = useParams();
    console.log(id);

  return (
    <div className="product_container">
        <Navbar />
        <hr/>
        {
          products.filter(item=>item._id ===  id).map(item=>(
            <div key={item._id}>
              <div>
                
              </div>
            </div>
          ))

        }
    </div>
  )
}

export default Product;