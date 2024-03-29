import React from 'react';

const Footer = () => {
  const authors = ['Nicholas Barfoot', 'James Carrier', 'Chris ONeill'];

  return (
    <footer className="footer">
      <p>Authors: {authors.join(', ')}</p>
    </footer>
  );
};

export default Footer;
