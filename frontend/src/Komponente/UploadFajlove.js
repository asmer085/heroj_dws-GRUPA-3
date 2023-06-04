import React, { Component } from 'react';
import { TextField, Button, Typography, Input, Box } from "@mui/material";
import axios from 'axios';
import LogovaniNavbar from "./LogovaniNavbar";

class UploadFajlove extends Component {
  state = {
    naziv: '',
    fajl: null
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.setState({ token });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImageChange = (e) => {
    this.setState({
      fajl: e.target.files[0]
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.naziv);
    console.log(this.state.fajl.name);

    const token = this.state.token;

    let form_data = new FormData();
    form_data.append('fajl', this.state.fajl, this.state.fajl.name);
    form_data.append('naziv', this.state.naziv);

    let url = 'http://127.0.0.1:8000/api/v1/pdffajlovi/';

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': `Token ${token}`
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <LogovaniNavbar />
        <p />
        <Box style={{ width: '400px', height: '10px' }} sx={{ m: "auto" }}>
          <form onSubmit={this.handleSubmit}>
            <Typography variant='h5'>Upload your own study material!</Typography>
            <p />
            <TextField
              variant="outlined"
              color="secondary"
              placeholder='File Name'
              sx={{ mb: 3 }}
              name="naziv"
              value={this.state.naziv}
              onChange={this.handleChange}
              required
            />
            <p />
            <Input
              type="file"
              id="fajl"
              accept=".pdf"
              onChange={this.handleImageChange}
              required
            />
            <p />
            <Button variant='contained' color='secondary' type="submit" size="small">Submit</Button>
          </form>
        </Box>
      </React.Fragment>
    );
  }
}

export default UploadFajlove;
