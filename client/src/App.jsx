import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Joinus from './components/Joinus.jsx';
import AgentRegister from './components/registrationComponents/AgentRegister.jsx';
import RestaurantRegister from './components/registrationComponents/RestaurantRegister.jsx';
import SearchBar from './components/Search.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/join-us" element={<Joinus />}/>
        <Route path='/agent-registration' element={<AgentRegister/>}/>
        <Route path='/restaurant-registration' element={<RestaurantRegister/>} />
        <Route path='/search' element={<SearchBar/>} />
      </Routes>
    </div>
  )
}

export default App
