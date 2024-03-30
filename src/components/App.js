import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import LoginForm from './LogInForm';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
