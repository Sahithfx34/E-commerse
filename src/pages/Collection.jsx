import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import { products } from "../assets/frontend_assets/assets";
import "../css/Collection.css";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { Cross } from "../features/search/SearchSlicer";

const Collection = () => {
  const [trackCategories, setTrackCategories] = useState([]);
  const [trackTypes, setTrackTypes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [updatedList, setUpdatedList] = useState(products);
  const searchDisplay = useSelector((state)=>state.ToggleSearch.value)

  const sort = ["Relevant", "Low to High", "High to Low"];
  const dispatch = useDispatch();

  useEffect(() => {
    applyFilters();
    console.log(trackCategories, trackTypes);
  }, [trackCategories, trackTypes, searchInput]);

  const applyFilters = () => {    
    let filtered = products;

    if(trackCategories.length > 0){
      filtered = filtered.filter(item => trackCategories.includes(item.category));
    }

    if(trackTypes.length > 0){
      filtered = filtered.filter(item => trackTypes.includes(item.subCategory));
    }

    if(searchInput){
      filtered = filtered.filter(item => item.name.toLowerCase().includes(searchInput));
    }

    setUpdatedList(filtered);
  };
  
  const handleCategories = (i) => {
    if (trackCategories.includes(i)) {
      setTrackCategories(prev => prev.filter(item => item !== i));
    } else {
      setTrackCategories(prev => [...prev, i]);
    }
  };
  
  const handleTypes = (i) => {
    if (trackTypes.includes(i)) {
      setTrackTypes(prev => prev.filter(item => item !== i));
    } else {
      setTrackTypes(prev => [...prev, i]);
    }
  };
  
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleCross=()=>{
    dispatch(Cross())
  }
  
  const handleSort = (e) => {
    const copyProd= updatedList.slice();
    console.log(e.target.value);
    switch(e.target.value){
      case "Low to High":
        copyProd.sort((a, b) => a.price - b.price);
        setUpdatedList(copyProd);
        break;
      case "High to Low":
        copyProd.sort((a, b) => b.price - a.price);
        setUpdatedList(copyProd);
        break;
      default:
        applyFilters();
        break;
      }
  };

  return (
    <div className="collection_container">
      <Navbar />
      
        {searchDisplay &&
        <div className="search">
        <>
          <input type="text" placeholder="Search" onChange={handleChange} />
          <img className="search_icon" src={assets.search_icon} alt="search"/>
          <div>
            <img className="cross_icon" src={assets.cross_icon} alt="cross" onClick={handleCross} />
          </div>
        </>
        </div>
        }
      <div className="collection_sub">
        <Filters handleCategories={handleCategories} handleTypes={handleTypes}/>
        <div className="products_container">
          <div>
            <div>
              <div className="collection_title">
                <Title title="ALL" sub="Collections"/>
                <select onChange={handleSort}>
                  {sort.map((item, i) => (
                    <option key={i} value={item}>Sort By: {item}</option>
                  ))}
                </select>

              </div>

            </div>
          </div>
          <div className="products">
            {updatedList.map(item => (
              <Link to={`/product/${item._id}`} key={item._id}>
                <div key={item._id}>
                  <img src={item.image[0]} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{"$" + item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;