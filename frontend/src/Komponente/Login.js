import React, { useState } from "react";
import { Box, Typography, Button, Input, FormGroup } from "@mui/material";
import logo from '../Slike/logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "./Navbar2";

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const navigate = useNavigate(); // za navigiranje nakon pritiska na sign in


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/dj-rest-auth/login/", values);
      console.log('Response:', response); // Debug: Log the entire response object
      console.log('Response data:', response.data); // Debug: Log the response data
  
      const { key, user } = response.data; // Change 'token' to 'key'
      console.log('Token:', key); // Debug: Check if the token is received correctly
  
      localStorage.setItem("token", key); // Change 'token' to 'key'
      localStorage.setItem("user", JSON.stringify(user));
  
      console.log('Stored Token:', localStorage.getItem("token")); // Debug: Check the stored token value
  
      navigate('/logovani');
    } catch (error) {
      console.log('Error:', error); // Debug: Log the error object for further investigation
  
      if (error.response && error.response.status === 400) {
        setError("Invalid username or password. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar2 />
      <Box style={{ width: '200px', height: '10px' }} sx={{ m: "auto" }}>
        <Box component="img"
          sx={{ height: 150 }}
          src={logo} />
        <FormGroup className="form" onSubmit={handleSubmit}>
          <Typography variant="h4">Log in</Typography><br />
          <Box className="inputs">
            <Input
              className="input"
              id="username"
              name="username"
              type="text"
              placeholder="Enter username"
              value={values.username}
              onChange={handleChange}
            />
          </Box>
          <Box className="inputs">
            <Input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
            />
          </Box><br />

          {error && (
            <Typography variant="body2" color="error" align="center" sx={{ mb: 1 }}>
              {error}
            </Typography>
          )}

          <Box textAlign='center'>
            <Button variant="contained" color="secondary" className="input-btn" type="submit" onClick={handleSubmit}>
              Sign in
            </Button>
          </Box>

          <br />

          <Box textAlign='center'>
            <Button variant="contained" className="input-btn" sx={{ marginBottom: "5px" }}>
              <Link to='/register' className='nav-links' style={{ textDecoration: 'none', color: "#F6F6F6" }}>
                Sign up
              </Link>
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </>
  );
};

export default Login;
