import React, { useState } from "react";
import { Box, Typography, Button, Input, FormGroup } from "@mui/material";
import logo from '../Slike/logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar2 from "./Navbar2";

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [errors, setErrors] = useState({}); // State za cuvanje errora

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/", values);
      // Registracija uspjela, navigiramo na logovane
      navigate("/login");
    } catch (error) {
      // errori
      if (error.response) {
        // Request je napravljen pa je server odgovorio sa errorom
        setErrors(error.response.data);
      } else {
        // neki drugi error
        console.log(error);
      }
    }
  };
  

  return (
    <>
      <Navbar2 />
      <Box className='form-container' style={{ width: '200px', height: '10px' }} sx={{ m: "auto" }}>
        <Box component="img"
          sx={{ height: 150 }}
          src={logo} />
        <FormGroup className="form" onSubmit={handleSubmit}>
          <Typography variant="h4">Register</Typography><br />
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
            {errors.username && <p>{errors.username}</p>} {/* username errori */}
          </Box>
          <Box className="inputs">
            <Input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>} {/* email error */}
          </Box>
          <Box className="inputs">
            <Input
              className="input"
              id="password1"
              name="password1"
              type="password"
              placeholder="Enter password"
              value={values.password1}
              onChange={handleChange}
            />
            {errors.password1 && <p>{errors.password1}</p>} {/* password1 error*/}
          </Box>
          <Box className="inputs">
            <Input
              className="input"
              id="password2"
              name="password2"
              type="password"
              placeholder="Confirm password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>} {/* password2 error */}
          </Box><br />

          <Box textAlign='center'>
            <Button variant="contained" className="input-btn" type="submit" onClick={handleSubmit}>Register</Button>
          </Box>

          <br />

          <Box textAlign='center'>
            <Button variant="contained" className="input-btn" sx={{ marginBottom: "5px" }}>
              <Link to='/login' className='nav-links' style={{ textDecoration: 'none', color: "#F6F6F6" }}>
                Log in
              </Link>
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </>
  );
};

export default Register;
