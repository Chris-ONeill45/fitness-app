import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import app from '../firebaseConfig';
import '../styles/registration-form.css';

const RegistrationForm = ({ userStatus, setUserStatus }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setUserStatus({ ...userStatus, message: 'All fields are required' });
      return;
    }
    if (password !== confirmPassword) {
      setUserStatus({ ...userStatus, message: 'Passwords do not match' });
      return;
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((response) => {
        setUserStatus({
          signedin: true,
          signedinEmail: response.user.email,
          message: `${response.user.email} registered`,
          name: formData.name,
        });
        navigate('/init-set');
      })
      .catch((err) => {
        setUserStatus({
          signedin: false,
          signedinEmail: null,
          message: err.message,
        });
      });
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    <div className="registration-form">
      <form className="registration-form--form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
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
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        {userStatus.signedin ? (
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <button type="submit">Register</button>
        )}
        <p>{userStatus.message}</p>
      </form>
    </div>
  );
};

export default RegistrationForm;
