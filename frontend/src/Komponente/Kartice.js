import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import prva from '../Slike/prva.jpg';
import druga from '../Slike/druga.jpg';
import test from '../Slike/test.jpg';


function MojaKartica({slika, tekst}) {
  return (
    <Card sx = {{ borderRadius: '16px' }} style = {{backgroundColor: "black"}}>

      <CardMedia
        component = "img"
        height = "200"
        image = {slika}
      />

      <CardContent>
        <Typography align = "center" color = "text.primary" variant="paragraph">
            {tekst}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size = "small" variant = "outlined" color = "secondary">Learn More</Button>
      </CardActions>

    </Card>
  );
}

function MojGrid() {
    return (
    <div> 

        <Typography align = "center" color = "text.primary" variant="h4">
            Prvu pomoć treba znati svako!
        </Typography>
        <br/>
       
        <br/>
        <Box align = "center" sx={{ width: '100%' }} >
        <Grid container spacing = {5} direction="row" alignItems="center" justifyContent="center" >

          <Grid>
            <MojaKartica slika = {druga} tekst = "Učenje za ispit" />
          </Grid>

          <Grid>
            <MojaKartica slika = {prva} tekst = "Praktični primjeri" />
          </Grid>

          <Grid>
            <MojaKartica slika = {test} tekst = "Simulacija ispita" />
          </Grid>

        </Grid>
        </Box>

    </div>
    );
  }

export default MojGrid;