import axios from "axios";
import React from "react";
import Navbar2 from "./Navbar2"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import  { useEffect, useState } from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Link from '@mui/material/Link';




const baseURL = "http://127.0.0.1:8000/api/v1/";

export default function Fajlovi() {
    const [post, setPost] = useState(null);

    useEffect(() => {
      axios.get(baseURL + "dokumentacija/")
        .then(response => {
          setPost(response.data); 
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); 

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }

    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
      changePage(-1);
    }

    function nextPage() {
      changePage(1);
    }

    return (
      <>
      <Navbar2 />
      <Box align="center" sx={{ width: '95%', m:"auto", marginTop:'15px'}}>
      <Grid container spacing={5} direction="row" alignItems="center" justifyContent="center">
        {post &&
          post.map((post) => (  
            <Grid item key = {post.id} xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: '16px'}} style={{ backgroundColor: "black" }}>
                <CardContent>
                  <Typography variant="h5">{post.naziv}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant = "contained" color = "secondary" component={RouterLink} to={post.dokumentacija}>
                    View PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      </Box>
    </>
  );
}