import logo from './nitalogo.png';
import './App.css';
import Welcomepage from './components/welcome_page/welcomepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuButton from './components/main';
import RnR from './components/relugation'
import RegisterPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/home" element={<MenuButton />} />
          <Route path="/rules&regulations" element={<RnR/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// npm i react-tilt react-hook-form axios, tailwind, material tailwind
