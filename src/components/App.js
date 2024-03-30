import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/app.css';
import LoginForm from './LogInForm';
import RegistrationForm from './RegistrationForm';
import InitSetForm from './InitSetForm';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route
            path="/init-set"
            element={<InitSetForm name="John" email="john@example.com" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
