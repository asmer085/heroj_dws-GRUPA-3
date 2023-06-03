import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';

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
    let form_data = new FormData();
    form_data.append('fajl', this.state.fajl, this.state.fajl.name);
    form_data.append('naziv', this.state.naziv);
    let url = 'http://localhost:8000/api/pdffajlovi/';
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
      <div >
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='naziv' value={this.state.naziv} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="file"
                   id="fajl"
                   accept=".pdf"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default UploadFajlove;