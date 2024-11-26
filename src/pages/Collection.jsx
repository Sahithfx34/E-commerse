import React, { useEffect, useState, useCallback, Suspense } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../assets/frontend_assets/assets";
import { assets } from "../assets/frontend_assets/assets";
import { Cross } from "../features/search/SearchSlicer";
import "../css/Collection.css";
import Loading from "../components/Loading";


const Navbar = React.lazy(() => import("../components/Navbar"));
const Filters = React.lazy(() => import("../components/Filters"));
const Footer = React.lazy(() => import("../components/Footer"));
const Title = React.lazy(() => import("../components/Title"));

const Collection = () => {
  const [trackCategories, setTrackCategories] = useState([]);
  const [trackTypes, setTrackTypes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [updatedList, setUpdatedList] = useState(products);
  const searchDisplay = useSelector((state) => state.ToggleSearch.value);

  const sort = ["Relevant", "Low to High", "High to Low"];
  const dispatch = useDispatch();

  const applyFilters = useCallback(() => {
    let filtered = products;

    if (trackCategories.length > 0) {
      filtered = filtered.filter((item) =>
        trackCategories.includes(item.category)
      );
    }

    if (trackTypes.length > 0) {
      filtered = filtered.filter((item) =>
        trackTypes.includes(item.subCategory)
      );
    }

    if (searchInput) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setUpdatedList(filtered);
  }, [trackCategories, trackTypes, searchInput]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);


  const handleCategories = useCallback((category) => {
      setTrackCategories((prev) => prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]);

    },[]);

  const handleTypes = useCallback((type) => {
      setTrackTypes((prev) => prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]);
    },[]);

  const handleChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  const handleCross = useCallback(() => {
    dispatch(Cross());
  }, [dispatch]);

  const handleSort = useCallback((e) => {

      const sortedList = [...updatedList];
      switch (e.target.value) {
        case "Low to High":
          sortedList.sort((a, b) => a.price - b.price);
          break;
        case "High to Low":
          sortedList.sort((a, b) => b.price - a.price);
          break;
        default:
          applyFilters();
          return;
      }

      setUpdatedList(sortedList);

    },[updatedList, applyFilters]);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="collection_container">
        <Navbar />

        {searchDisplay && (
          <div className="search">
            <>
              <input type="text" placeholder="Search" onChange={handleChange} value={searchInput} />
              <img className="search_icon" src={assets.search_icon} alt="search"/>

              <div>
                <img className="cross_icon" src={assets.cross_icon} alt="cross" onClick={handleCross} />
              </div>
            </>
          </div>
        )}

        <div className="collection_sub">
          <Filters
            handleCategories={handleCategories}
            handleTypes={handleTypes}
          />
          <div className="products_container">
            <div>
              <div>
                <div className="collection_title">
                  <Title title="ALL" sub="Collections" />
                  <select onChange={handleSort}>
                    {sort.map((item, i) => (
                      <option key={i} value={item}>
                        Sort By: {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="products">
              {updatedList.map((item) => (
                <Link to={`/product/${item._id}`} key={item._id}>
                  <div key={item._id}>
                    <img src={item.image[0]} alt={item.name} loading="lazy" />
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
    </Suspense>
  );
};

export default Collection;
