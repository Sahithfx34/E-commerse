import { useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets"
import "../css/Home.css"
const Latest_Collection = () => {
     
    const [latestItems,setLatestItems] = useState([]);

    useEffect(()=>{
        setLatestItems(products.slice(-10));

    },[])
  return (
    <div>
        <div>
            <h3><span>LATEST</span> COLLECTION</h3>
            <div className="line"></div>

        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, neque. Praesentium id veritatis eos esse. Accusamus cum perferendis at officia amet iure impedit fuga explicabo corrupti? Iusto ex delectus non!</p>
        {   
            latestItems.slice(-10).map((item)=>(
                <div key={item.id}>
                    <img src={item.image[0]} alt={item.name}/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Latest_Collection;