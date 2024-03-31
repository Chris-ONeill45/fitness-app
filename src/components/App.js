import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import NavBar from './NavBar';
import LoginForm from './LogInForm';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';

const App = () => {
  const [userStatus, setUserStatus] = useState({
    signedin: false,
    signedinEmail: null,
    message: 'Not signed in',
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;