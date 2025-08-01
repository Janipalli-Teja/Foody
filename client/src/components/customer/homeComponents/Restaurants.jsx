import { Link } from "react-router-dom";

const Restaurants = ({restaurants}) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Restaurants near you</h1>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="flex-shrink-0 w-56 bg-white rounded-2xl shadow-md p-3 text-center"
          >
            <Link to={`/restaurant/${restaurant._id}`}>
              <img
                src={restaurant.logo_url}
                alt={restaurant.name}
                className="w-48 h-48 object-cover rounded-xl mx-auto"
              />
            </Link>
            <h3 className="mt-3 text-lg font-semibold">{restaurant.name}</h3>
            <h4 className="text-sm text-gray-600 mt-1">
              {restaurant.opens_at} AM – {restaurant.closes_at} PM
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
