import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import NavBar from './NavBar';
import LoginForm from './LogInForm';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';
import InitSetForm from './InitSetForm';
import Dashboard from './Dashboard';
import SetForm from './SetForm';
import AddData from './AddData';

const App = () => {
  const [userStatus, setUserStatus] = useState({
    signedin: false,
    signedinEmail: null,
    message: 'Not signed in',
    name: null,
  });

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <LoginForm
                userStatus={userStatus}
                setUserStatus={setUserStatus}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <RegistrationForm
                userStatus={userStatus}
                setUserStatus={setUserStatus}
              />
            }
          />

          <Route
            path="/init-set"
            element={
              <InitSetForm
                userStatus={userStatus}
                setUserStatus={setUserStatus}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<SetForm />} />
          <Route
            path="/add-data"
            element={<AddData userStatus={userStatus} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
