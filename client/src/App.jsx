import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Joinus from './components/Joinus.jsx';
import AgentRegister from './components/registrationComponents/AgentRegister.jsx';
import RestaurantRegister from './components/registrationComponents/RestaurantRegister.jsx';
import SearchBar from './components/Search.jsx';
import UserAccount from './components/UserAccount.jsx';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Wrap all routed pages in a padded container */}
      <div className="px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/join-us" element={<Joinus />} />
          <Route path="/agent-registration" element={<AgentRegister />} />
          <Route path="/restaurant-registration" element={<RestaurantRegister />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path='/my-account' element={<UserAccount/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
