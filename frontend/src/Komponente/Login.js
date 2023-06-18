import React, { useState } from "react";
import { Box, Typography, Button, Input, FormGroup } from "@mui/material";
import logo from '../Slike/logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "./Navbar2";
import backgroundImage from "../Slike/map_city.jpg";

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
      console.log('Response:', response);
      console.log('Response data:', response.data);
  
      const { key } = response.data; // Get the token from response.data
  
      // Get the username from values
      const { username } = values;
  
      console.log('Token:', key);
      localStorage.setItem("token", key); // Store the token in local storage
      localStorage.setItem("username", username); // Store the username in local storage
  
      console.log('Stored Token:', localStorage.getItem("token"));
      console.log('Stored Username:', localStorage.getItem("username"));
  
      navigate('/');
    } catch (error) {
      console.log('Error:', error);
  
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
      <div style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: "cover",
      minHeight: "90vh"}}>
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
      </div>
    </>
  );
};

export default Login;
