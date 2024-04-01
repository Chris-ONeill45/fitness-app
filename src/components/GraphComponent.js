import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

const graphComponent = ({ graphType, data }) => {
  let chartComponent;
  switch (graphType) {
    case 'line':
      chartComponent = <Line data={data} />;
      break;
    case 'bar':
      chartComponent = <Bar data={data} />;
      break;
    case 'pie':
      chartComponent = <Pie data={data} />;
      break;
    default:
      chartComponent = <div>No graph selected</div>;
  }

  return <div>{chartComponent}</div>;
};

export default graphComponent;
