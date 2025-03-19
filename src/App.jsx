import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Auth/SignIn/SignIn';
import Verifyfingerprint from './Components/Verify-Fingerprint/verifyfingerprint';
import Home from './Pages/Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Header from './Components/Header/Header';
import PositionSession from './Pages/Sessions/Positions-Sessions/PositionSession';
import DecisionSession from './Pages/Sessions/Decisions-Sessions/DecisionSession';
import Decisions from './Pages/Decisions/Decisions';
import Positions from './Pages/Positions/Positions';
import { Toaster } from 'react-hot-toast';
import FAQs from './Pages/FAQs/FAQs';
import AboutUs from './Pages/About-us/AboutUs';

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/verify-fingerprint" element={<Verifyfingerprint />} />
        <Route path="/home" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/position-sessions" element={<PositionSession />} />
        <Route path="/decision-sessions" element={<DecisionSession />} />
        <Route path="/decision-session" element={<Decisions />} />
        <Route path="/position-session" element={<Positions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default App;