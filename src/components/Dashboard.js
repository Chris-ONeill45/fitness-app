import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GraphComponent from './GraphComponent';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [graphType, setGraphType] = useState('line');

  const addData = (newData) => {
    setUserData([...userData, newData]);
  };

  const handleGraphTypeChange = (e) => {
    setGraphType(e.target.value);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/add-data">Add Data</Link>
      <select value={graphType} onChange={handleGraphTypeChange}>
        <option value="line">Line</option>
        <option value="bar">Bar</option>
        <option value="pie">Pie</option>
      </select>
      {userData.length > 0 && (
        <GraphComponent data={userData} graphType={graphType} />
      )}
    </div>
  );
};

export default Dashboard;
