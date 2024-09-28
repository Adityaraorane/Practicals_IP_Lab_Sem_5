import React from 'react';
import profilePic from 'C:/Users/adity/Desktop/VESIT_Notes/IP_Lab/Expt_06/adityaraorane/src/aditya.jpg'; 

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  };

  const profilePicStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  };

  const textContainerStyle = {
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  };

  const h1Style = {
    margin: '0',
    fontSize: '2.5rem',
    color: '#ffcc00',
  };

  const h2Style = {
    margin: '5px 0 0 0',
    fontSize: '1.5rem',
    color: '#ffffff',
  };

  return (
    <header style={headerStyle}>
      <img src={profilePic} alt="Aditya Nagesh Raorane" style={profilePicStyle} />
      <div style={textContainerStyle}>
        <h1 style={h1Style}>Aditya Nagesh Raorane</h1>
        <h2 style={h2Style}>Web Developer | Designer | Tech Enthusiast</h2>
      </div>
    </header>
  );
};

export default Header;
