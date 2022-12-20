import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SelfAnalyze from './pages/SelfAnalyze';
import OnlineMedic from './pages/OnlineMedic';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import Chatbot from './components/Chatbot.js'
import SymptonChecker from './pages/SymptonChecker';
import AiSymptonNew from './pages/AiSymptonNew';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Chatbot />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/selfanalyze" element={<PrivateRoute><SelfAnalyze /></PrivateRoute>} />
          <Route path="/onlinemedic" element={<PrivateRoute><OnlineMedic /></PrivateRoute>} />
          <Route path="/symptonchecker" element={<PrivateRoute><SymptonChecker /></PrivateRoute>} />
          <Route path="/aisymptonchecker" element={<PrivateRoute><AiSymptonNew /></PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
