import {Link} from "react-router-dom";

const Joinus = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-10">Join the Foody Family</h1>

      {/* Delivery Partner Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="agent.jpg"
          alt="Delivery Partner"
          className="w-full md:w-1/3 rounded-2xl shadow-m object-cover"
        />
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-semibold">Ride With Foody</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident corporis facere quas cupiditate possimus quae, laboriosam accusantium optio animi aliquid sint eius officia recusandae.
          </p>
          <Link to="/agent-registration">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition">
            Register as Delivery Partner
          </button>
          </Link>
        </div>
      </div>

      {/* Restaurant Partner Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="restaurant.jpg"
          alt="Restaurant Partner"
          className="w-full md:w-1/2 rounded-2xl shadow-m object-cover"
        />
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-semibold">Foody Partner Program</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident corporis facere quas cupiditate possimus quae, laboriosam accusantium optio animi aliquid sint eius officia recusandae.
          </p>
          <Link to="/restaurant-registration">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition">
            Register your Restaurant
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
