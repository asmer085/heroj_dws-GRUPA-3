import React, { useState } from 'react';
import { TextField, Button, Typography, Input, Box } from "@mui/material";
import axios from 'axios';
import LogovaniNavbar from "./LogovaniNavbar";


/* const FileUploadForm = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('naziv', name);
    formData.append('fajl', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Error uploading file');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField variant='outlined' color='secondary' value={name} onChange={handleNameChange} margin="normal" />
      <br />
      <input name='fajl' type="file" accept=".pdf"  onChange={handleFileChange} />
      <br />
      <Button type='submit' variant='contained' color='secondary' size='small'>Upload</Button>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </Box>
  );
};

export default FileUploadForm;
 */


import  { Component } from 'react';


class UploadFajlove extends Component {

  state = {
    naziv: '',
    fajl: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      fajl: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.fajl.name)
    let form_data = new FormData();
    form_data.append('fajl', this.state.fajl, this.state.fajl.name);
    form_data.append('naziv', this.state.naziv);
    let url = 'http://127.0.0.1:8000/api/v1/pdffajlovi/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };



  render() {
    return (
      <React.Fragment>
      <LogovaniNavbar/>
      <p/>
      <Box style={{ width: '400px', height: '10px' }} sx={{ m: "auto" }} >
        <form onSubmit={this.handleSubmit}>
          <Typography variant='h5'>Upload your own study material!</Typography>
          <p/>
          <TextField variant="outlined" color="secondary" placeholder='File Name' sx={{mb: 3}} component="label"> 
              <input onChange={this.handleChange} value={this.state.naziv}  required hidden> </input>     
          </TextField> 
          <p/>
          <Input type="file" id="fajl" accept=".pdf"  onChange={this.handleImageChange} required hidden > </Input> 
          <p/>
          <Button variant = 'contained' color = 'secondary' type="submit" size="small">Submit</Button>
        </form>
      </Box>
      </React.Fragment>
    );
  }
}

export default UploadFajlove;