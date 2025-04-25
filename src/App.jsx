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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import UserManagement from './Dashboard/UserManagement/UserManagement';
import AddCandidates from './Dashboard/Manage Candidates/Add Candidates/AddCandidates';
import ViewCandidates from './Dashboard/Manage Candidates/View Candidates/ViewCandidates';
import EditCandidates from './Dashboard/Manage Candidates/Edit Candidates/EditCandidates';
import AddDecision from './Dashboard/Manage Decisions/Add Decision/AddDecision';
import ViewDecision from './Dashboard/Manage Decisions/View Decision/ViewDecision';
import EditDecision from './Dashboard/Manage Decisions/Edit Decision/EditDecision';
import AddUser from './Dashboard/UserManagement/Add User/AddUser';
import ViewUser from './Dashboard/UserManagement/View User/ViewUser';
import EditUser from './Dashboard/UserManagement/Edit User/EditUser';;
import ManageElection from './Dashboard/Manage Elections/ManageElections';
import AddElection from './Dashboard/Manage Elections/Add Election/AddElection';
import ViewElections from './Dashboard/Manage Elections/View Session/ViewElections';
import EditElection from './Dashboard/Manage Elections/Edit Session/EditElection';
import Cookies from 'universal-cookie';
import GoBackBtn from './Components/Go Back btn/GoBackBtn';

function App() {

  const cookie = new Cookies();
  const user = cookie.get('user');

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
          <Route path="/decision-session/:id" element={<Decisions />} />
          <Route path="/position-session/:id" element={<Positions />} />


          {
            user && user.role === "manager" ? (
              <>
                {/* Dashoard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Manage Decisions */}
                <Route path="/manage-decisions" element={<ManageDecisions />}>
                  <Route path='add-decision' element={<AddDecision />} />
                  <Route path='view-decisions' element={<ViewDecision />} />
                  <Route path='edit-decision/:id' element={<EditDecision />} />
                </Route>

                {/* Manage Candidates */}
                <Route path="/manage-candidates" element={<ManageCandidates />} >
                  <Route path='add-candidate' element={<AddCandidates />} />
                  <Route path='view-candidates' element={<ViewCandidates />} />
                  <Route path='edit-candidate/:id' element={<EditCandidates />} />
                </Route>

                {/* Manage Elections */}
                <Route path="/manage-elections" element={<ManageElection />}>
                  <Route path='add-election' element={<AddElection />} />
                  <Route path='view-elections' element={<ViewElections />} />
                  <Route path='edit-election/:id' element={<EditElection />} />
                </Route>

                {/* User Managment */}
                <Route path="manage-users" element={<UserManagement />}>
                  <Route path='add-user' element={<AddUser />} />
                  <Route path='view-users' element={<ViewUser />} />
                  <Route path='edit-user/:id' element={<EditUser />} />
                </Route>
              </>
            ) : (
              <>
                <Route path="*" element={<>
                  <GoBackBtn />
                  <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <h1>Page Doesn't Exist</h1>
                  </div>
                </>}></Route>
              </>
            )
          }

          {/* FAQ Page Route */}
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </LocalizationProvider>
    </>
  );
}

export default App;