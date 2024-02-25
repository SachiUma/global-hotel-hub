// TopBar.js
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';


function TopBar({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
      };
    
  return (
    <div className="top-bar">
      <h1>Global-Hotel-Hub </h1>
      <Button onClick={handleLogout} 
              color="warning" 
              variant="contained"
                style={{ color: 'blue', backgroundColor: 'white' }}>
                  Logout
                  </Button>

    </div>
  );
}

export default TopBar;
