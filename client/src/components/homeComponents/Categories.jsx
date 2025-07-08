import { useState, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";

const Categories = () => {
  const [Category_items, setCategory_items] = useState([]);

  useEffect(() => {
    HandleCategoryitems();
  }, [])

  async function HandleCategoryitems() {
    try {

      const url = "http://localhost:3000/";
      const response = await fetch(url);
      const data = await response.json();
      setCategory_items(data.categories);
    } catch (err) {
      console.log("error ", err);
    }
  }

  return (
<div className="Categories p-2">
        <h1 className="text-3xl font-bold mb-4">Categories</h1>

        <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
          {Category_items.map((category) => (
            <div
              key={category._id}
              className="flex-shrink-0 w-40 bg-white rounded-2xl p-2 text-center"
            >
              <Link to="/" >
              <img
                src={category.img_url}
                alt={category.name}
                className="w-20 h-20 object-cover rounded-2xl mx-auto"
                />
              </Link>
              <h3 className="mt-3 text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Categories;