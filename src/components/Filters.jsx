
const Filters = ({handleCategories,handleTypes}) => {
  const categories = ["Men", "Women", "Kids"];
  const type = ["Topwear", "Bottomwear", "Winterwear"];

  return (
    <div className="filter_container">
          <h4>filters</h4>
          <div>
            <h4>Categories</h4>
            {categories.map((item) => (
              <div key={item} className="filter_items">
                <input
                  type="checkbox"
                  name={item}
                  value={item}
                  onChange={() => handleCategories(item)}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
          <div>
            <h4>Type</h4>
            {type.map((item) => (
              <div key={item} className="filter_items">
                <input
                  type="checkbox"
                  name={item}
                  value={item}
                  onChange={() => handleTypes(item)}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Filters