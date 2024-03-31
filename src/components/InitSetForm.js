import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InitSetForm = ({ userStatus }) => {
  const [formData, setFormData] = useState({
    dob: '',
    height: '',
    dataset: [],
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWeightChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      dataset: [{ label: name, measurement: value }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('/users', { formData })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>Welcome, {userStatus.name}!</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dob">
            Date of Birth
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="height">
            Height
            <input
              type="number"
              placeholder="Cm"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="weight">
            Weight
            <input
              type="number"
              placeholder="Kg"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleWeightChange}
            />
          </label>
        </div>
        {/* <div>
          <label htmlFor="dataset">
            Predefined Dataset:
            <select
              id="dataset"
              name="dataset"
              value={formData.dataset}
              onChange={handleChange}
            >
              <option value="">Select a dataset</option>
              <option value="dataset1">Dataset 1</option>
              <option value="dataset2">Dataset 2</option>
              <option value="dataset3">Dataset 3</option>
            </select>
          </label>
        </div> */}
        <button type="submit">Submit</button>
      </form>

      {/* Add a link/button to navigate to another page */}
      <Link to="/dashboard">Continue</Link>
    </div>
  );
};

export default InitSetForm;
