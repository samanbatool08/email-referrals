import React from 'react';
import { Button } from '@mui/material';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to MyProject!</h1>
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
      <Button variant="outlined" color="primary">
        Log In
      </Button>
    </div>
  );
};

export default Welcome;
