import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useNavigate } from "react-router-dom";
import ispit from "../Slike/ispit.jpg";
import simulacija from "../Slike/simulacija.jpg";
import LogovaniNavbar from "./LogovaniNavbar";

function Kviz() {
  return (
    <div>
      <LogovaniNavbar />
      <br />
      <Typography align="center" color="text.primary" variant="h4">
        Kviz
      </Typography>
      <br />
      <br />
      <Box align="center" sx={{ width: "100%" }}>
        <Grid
          container
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <KarticaIspit
            slika={simulacija}
            tekst="Simulacija Ispita"
            url="simulacija-ispita/"
          />
          <KarticaIspit slika={ispit} tekst="Ispit" url="ispit/" />
        </Grid>
      </Box>
    </div>
  );
}

function KarticaIspit({ slika, tekst, url }) {
  const navigate = useNavigate();

  return (
    <Grid>
      <Card sx={{ borderRadius: "16px" }} style={{ backgroundColor: "black" }}>
        <CardMedia component="img" height="200" image={slika} />
        <CardContent>
          <Typography align="center" color="text.primary" variant="paragraph">
            {tekst}
          </Typography>
        </CardContent>
        <CardActions>
          <Box width={'100%'} textAlign="center">
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/" + url)}
            >
              Pokreni
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Kviz;
