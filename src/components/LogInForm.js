import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import '../styles/log-in-form.css';
import app from '../firebaseConfig';

const LoginForm = ({ userStatus, setUserStatus }) => {
  const auth = getAuth(app);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((response) => {
        setUserStatus({
          signedin: true,
          signedinEmail: response.user.email,
          message: `${response.user.email} logged in`,
        });
        setFormData({
          email: '',
          password: '',
        });
      })
      .catch((err) => {
        console.log(err.message);
        setUserStatus({
          signedin: false,
          signedinEmail: null,
          message: err.message,
        });
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserStatus({
          signedin: false,
          signedinEmail: null,
          message: 'Not signed in',
        });
      })
      .catch((err) => {
        console.log(err.message);
        setUserStatus({
          signedin: false,
          signedinEmail: null,
          message: err.message,
        });
      });
  };

  return (
    <div className="log-in-form">
      <form className="log-in-form--form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {userStatus.signedin ? (
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <button type="submit">Login</button>
        )}
        <p>{userStatus.message}</p>
        {error && <div className="error-message">{error}</div>}
      </form>
      <Link to="/registration">Register Here</Link>
    </div>
  );
};

export default LoginForm;
