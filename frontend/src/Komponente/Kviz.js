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
import backgroundImage from "../Slike/map_city.jpg";

function Kviz() {
  return (
    <div>
      <LogovaniNavbar />
      <div style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: "cover",
      minHeight: "90vh"}}>
      <br />
      <Typography align="center" color="text.primary" variant="h4">
        Quiz
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
            tekst="Practice Exam"
            url="simulacija-ispita/"
          />
          <KarticaIspit slika={ispit} tekst="Exam" url="ispit/" />
        </Grid>
      </Box>
      </div>
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
              Start
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Kviz;
