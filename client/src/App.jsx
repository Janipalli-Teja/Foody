import './App.css'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Joinus from './components/Joinus.jsx';
import AgentRegister from './components/registrationComponents/AgentRegister.jsx';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/join-us" element={<Joinus />}/>
        <Route path='/agent-registration' element={<AgentRegister/>}/>
      </Routes>
    </div>
  )
}

export default App
