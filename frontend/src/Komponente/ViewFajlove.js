import React, { useState, useEffect,} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LogovaniNavbar from "./LogovaniNavbar";
import PretragaFajlova from './PretragaFajlova';


const ViewFajlove = ({ fileId }) => {
  const [fileUrl, setFileUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fileId) {
      const apiUrl = `http://127.0.0.1:8000/api/pdffajlovi/${fileId}/`;
      const token = localStorage.getItem('token');
      setIsLoading(true); 
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(response => {
          console.log('API Response:', response.data);
          setFileUrl(response.data.fajl);
        })
        .catch(error => {
          console.error('Error fetching file:', error);
        })
        .finally(() => {
          setIsLoading(false); 
        });
    }
  }, [fileId]);

  const handleSubmit = e => {
    e.preventDefault();
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      console.error('File URL is empty.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <IconButton target="_blank" href= {fileUrl} variant='outlined' color='secondary'> <FileOpenIcon/> </IconButton>
      )

};

const IzlistajFajlove = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const baseURL = 'http://127.0.0.1:8000/api/pdffajlovi/';
    const token = localStorage.getItem('token');

    axios
      .get(baseURL, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
    <LogovaniNavbar/>
    <List sx={{ width: '100%', maxWidth: 360}}>
      {posts && posts.map(post => {
        if (post.odobreno) {
          return (
            <ListItem key={post.id}>
              <ViewFajlove fileId={post.id} /> 
              <ListItemText primary={post.naziv} />
            </ListItem>
          );
        }
        return null
      })}
    </List>
    <Box sx={{ m: 4}}> 
    <Typography variant='h7'>Do you want to add your own files?</Typography> 
    <p/>
    <Button size = 'small' variant = 'contained' color = 'secondary' onClick={() => navigate('/uploadform')}>Click here</Button>
    <PretragaFajlova/>
    </Box>
  </>
);
}

export default IzlistajFajlove;
