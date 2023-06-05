import axios from "axios";
import React from "react";
import LogovaniNavbar from "./LogovaniNavbar";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Grid } from "@mui/material";

const baseURL = "http://127.0.0.1:8000/api/v1/";

export default function Video() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(baseURL + "videoprimjeri/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then(response => {
        setPost(response.data); 
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <LogovaniNavbar/>
      <Box align="center" sx={{ width: '95%', m:"auto", marginTop:'15px'}}>
        <Grid container spacing={5} direction="row" alignItems="center" justifyContent="center">
          {post &&
            post.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card sx={{ borderRadius: '16px' }} style={{ backgroundColor: "black" }}>
                  <CardContent>
                    <Typography variant="h5">{post.naslov}</Typography>
                    <ReactPlayer url={post.link_videa} controls width="100%" height="250px" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  ); 
}