import './App.css';
import { Route, Routes } from 'react-router';

import ErrorPage from './components/ErrorPage.jsx';

//customer
import Home from './components/customer/Home.jsx';
import Joinus from './components/customer/Joinus.jsx';
import AgentRegister from './components/customer/registrationComponents/AgentRegister.jsx';
import RestaurantRegister from './components/customer/registrationComponents/RestaurantRegister.jsx';
import SearchBar from './components/customer/Search.jsx';
import UserAccount from './components/customer/UserAccount.jsx';

//restaurant 
import Dashboard from "./components/restaurant/Dashboard.jsx";
import Orders from "./components/restaurant/Orders.jsx"
import MenuBar from './components/restaurant/MenuBar.jsx';
import OrderHistory from './components/restaurant/OrderHistory.jsx';
import Offers from './components/restaurant/Offers.jsx';
import RestaurantSupport from './components/restaurant/RestaurantSupport.jsx';

import CustomerLayout from './components/CustomerLayout.jsx';
import RestaurantLayout from './components/RestaurantLayout.jsx';


function App() {
  return (
    <div>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join-us" element={<Joinus />} />
          <Route path="/agent-registration" element={<AgentRegister />} />
          <Route path="/restaurant-registration" element={<RestaurantRegister />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path='/my-account' element={<UserAccount />} />
        </Route>
        <Route path='/restaurant' element={<RestaurantLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menu" element={<MenuBar />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="offers" element={<Offers />} />
          <Route path="support" element={<RestaurantSupport />} />
        </Route> 
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
