import axios from "axios";
import React from "react";
import Navbar2 from "./Navbar2"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const baseURL = "http://127.0.0.1:8000/dokumentacija/";

export default function Fajlovi() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);



  return (
     <>
    <Navbar2/>
    <Box sx = {{m: "auto"}}>
        
        {post && post.map(post =>
        <Card sx = {{ borderRadius: '16px' }} style = {{backgroundColor: "black"}}>
        <CardContent>
        <Typography variant = "h2" > {post.naziv} </Typography>
        <Typography variant = "paragraph" > {post.dokumentacija} </Typography>
        </CardContent>
        </Card>
        )}
    
    </Box>
    </>
    
  );
}