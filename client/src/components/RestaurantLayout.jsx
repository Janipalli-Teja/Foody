import RestaurantNavbar from './restaurant/RestaurantNavbar.jsx'; // Correct the path
import { Outlet } from 'react-router-dom';

const RestaurantLayout = () => {
  return (
    <>
      <RestaurantNavbar />
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      </div>
    </>
  );
};

export default RestaurantLayout;
