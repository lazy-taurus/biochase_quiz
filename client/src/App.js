import './App.css';
import Welcomepage from './pages/welcomepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Overview from './pages/Overview';
import Header from './components/header';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/footer';
import 'react-toastify/ReactToastify.css';
import LevelPage from './pages/levelPage';
import QuizPage from './pages/QuizPage';
import ResponsesPage from './pages/ResponsesPage';
import AdminPage from './pages/AdminLogin';
import UnstopContestPage from './pages/waste/Page';
import Timeline from './pages/waste/unstop';

function App() {
  return (
    <Router>
      <div className='App w-full'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header />
        <Routes>
          <Route path='/' element={<Welcomepage />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/ad' element={<UnstopContestPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/level' element={<LevelPage />} />
          <Route path='/quiz/:id' element={<QuizPage />} />
          <Route path='/unstop' element={<Timeline />} />
          <Route path='/responses' element={<ResponsesPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

// npm i react-tilt react-hook-form axios, tailwind, material tailwind
