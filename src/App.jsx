import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Auth/SignIn/SignIn';
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
import Verifyfingerprint from './Components/Verify-Fingerprint/Verifyfingerprint';
import ManageDecisions from './Dashboard/Manage Decisions/ManageDecisions';
import ManageCandidates from './Dashboard/Manage Candidates/ManageCandidates';
import ManageSessions from './Dashboard/Manage Sessions/ManageSessions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import UserManagement from './Dashboard/UserManagement/UserManagement';
import AddCandidates from './Dashboard/Manage Candidates/Add Candidates/AddCandidates';
import ViewCandidates from './Dashboard/Manage Candidates/View Candidates/ViewCandidates';
import EditCandidates from './Dashboard/Manage Candidates/Edit Candidates/EditCandidates';
import AddDecision from './Dashboard/Manage Decisions/Add Decision/AddDecision';
import ViewDecision from './Dashboard/Manage Decisions/View Decision/ViewDecision';
import EditDecision from './Dashboard/Manage Decisions/Edit Decision/EditDecision';
import AddSession from './Dashboard/Manage Sessions/Add Session/AddSession';
import ViewSession from './Dashboard/Manage Sessions/View Session/ViewSession';
import EditSession from './Dashboard/Manage Sessions/Edit Session/EditSession';
import AddUser from './Dashboard/UserManagement/Add User/AddUser';
import ViewUser from './Dashboard/UserManagement/View User/ViewUser';
import EditUser from './Dashboard/UserManagement/Edit User/EditUser';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <Routes>

          {/* Auth Routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/verify-fingerprint" element={<Verifyfingerprint />} />

          {/* Home Page Route */}
          <Route path="/home" element={
            <>
              <Header />
              <Home />
            </>
          } />

          {/* About Us Page Route */}
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Sessions Pages */}
          <Route path="/position-sessions" element={<PositionSession />} />
          <Route path="/decision-sessions" element={<DecisionSession />} />
          <Route path="/decision-session" element={<Decisions />} />
          <Route path="/position-session" element={<Positions />} />

          {/* Dashoard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Manage Decisions */}
          <Route path="/manage-decisions" element={<ManageDecisions />}>
            <Route path='add-decision' element={<AddDecision />} />
            <Route path='view-decision' element={<ViewDecision />} />
            <Route path='edit-decision/:id' element={<EditDecision />} />
          </Route>

          {/* Manage Candidates */}
          <Route path="/manage-candidates" element={<ManageCandidates />} >
            <Route path='add-candidate' element={<AddCandidates />} />
            <Route path='view-candidate' element={<ViewCandidates />} />
            <Route path='edit-candidate/:id' element={<EditCandidates />} />
          </Route>

          {/* Manage Session */}
          <Route path="/manage-sessions" element={<ManageSessions />}>
            <Route path='add-session' element={<AddSession />} />
            <Route path='view-session' element={<ViewSession />} />
            <Route path='edit-session/:id' element={<EditSession />} />
          </Route>

          {/* User Managment */}
          <Route path="manage-users" element={<UserManagement />}>
            <Route path='add-user' element={<AddUser />} />
            <Route path='view-user' element={<ViewUser />} />
            <Route path='edit-user/:id' element={<EditUser />} />
          </Route>

          {/* FAQ Page Route */}
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </LocalizationProvider>
    </>
  );
}

export default App;