import Navbar from './customer/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const CustomerLayout = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default CustomerLayout;
