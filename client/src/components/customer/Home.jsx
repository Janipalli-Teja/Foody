import { useState, useEffect } from "react";

import Categories from "./homeComponents/Categories";
import Restaurants from "./homeComponents/Restaurants";
const Home = () => {

    const [Category_items, setCategory_items] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
      HandleHomeComponents();
    }, [])
  
    async function HandleHomeComponents() {
      try {
  
        const url = "http://localhost:3000/home";
        const response = await fetch(url);
        const data = await response.json();
        setCategory_items(data.categories);
        setRestaurants(data.restaurants);
      } catch (err) {
        console.log("error ", err);
      }
    }

  return (
    <div>
      <Categories Category_items={Category_items}/>
      <Restaurants restaurants={restaurants}/>
    </div>
  );
};

export default Home;