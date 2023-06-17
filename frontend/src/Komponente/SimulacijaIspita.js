import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import IspitnaPitanja from "./IspitnaPitanja";
import LogovaniNavbar from "./LogovaniNavbar";

const pitanjaApiURL = "http://127.0.0.1:8000/api/v1/pitanja/";
const odgovoriApiURL = "http://127.0.0.1:8000/api/v1/odgovori/";

// https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
const randomPitanja = (arr) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

const SimulacijaIspita = () => {
  const [pitanja, setPitanja] = useState([]);

  useEffect(() => {
    axios
      .get(pitanjaApiURL, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const ispitnaPitanja = response.data.filter(
          (item) => item.tezina === 1
        );

        axios
          .get(odgovoriApiURL, {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            const odgovori = response.data;

            ispitnaPitanja.forEach(function (ispitnoPitanje, index) {
              const tacanOdgovor = odgovori.find(
                (odgovor) => odgovor.id === ispitnoPitanje.tacan_odgovor
              );

              const netacanOdgovor1 = odgovori.find(
                (odgovor) => odgovor.id === ispitnoPitanje.netacan_odgovor1
              );

              const netacanOdgovor2 = odgovori.find(
                (odgovor) => odgovor.id === ispitnoPitanje.netacan_odgovor2
              );

              ispitnoPitanje.odgovori = randomPitanja([
                tacanOdgovor.odgovor,
                netacanOdgovor1.odgovor,
                netacanOdgovor2.odgovor,
              ]);

              ispitnoPitanje.tacanOdgovor = tacanOdgovor.odgovor;
            });

            setPitanja(ispitnaPitanja);
          });
      });
  }, []);

  return (
    <div>
      <LogovaniNavbar />
      <br />
      <Typography align="center" color="text.primary" variant="h4">
      Practice Exam
      </Typography>
      <br />
      <br />
      <IspitnaPitanja pitanja={pitanja} />
    </div>
  );
};

export default SimulacijaIspita;
