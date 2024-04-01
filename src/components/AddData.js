import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddData = () => {
  const [weight, setWeight] = useState('');
  const navigate = useNavigate();

  // const fakeData = {
  //   name: 'Tom',
  //   email: 'tom@tom.com',
  //   dob: '01/01/1999',
  //   height: 120,
  //   dataSet: [
  //     {
  //       label: 'weight',
  //       unit: 'Kg',
  //       entry: [{ measurement: 1, timestamp: 1 }],
  //     },
  //   ],
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fakeData.dataSet[0].entry.push({
    //   measurement: weight,
    //   timestamp: new Date(),
    // });
    // console.log(fakeData);

    try {
      await axios.post('/api/addData', { weight });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight">
            Weight
            <input
              type="number"
              id="weight"
              placeholder="Kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddData;
