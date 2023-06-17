import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IspitnaPitanja = ({ pitanja }) => {
  let navigate = useNavigate();

  const [brojTrenutnogPitanja, setBrojTrenutnogPitanja] = useState(0);
  const [odabraniOdgovor, setOdabraniOdgovor] = useState("");
  const [brojTacnihOdgovora, setBrojTacnihOdgovora] = useState(0);
  const [zavrsio, setZavrsio] = useState(false);
  const [odgovorio, setOdgovorio] = useState(false);

  const provjeriOdgovor = (answer) => {
    setOdabraniOdgovor(answer);
    setOdgovorio(true);
  };

  const provjeriTacanOdgovor = () => {
    if (odabraniOdgovor === pitanja[brojTrenutnogPitanja].tacanOdgovor) {
      setBrojTacnihOdgovora(brojTacnihOdgovora + 1);
    }
  };

  const provjeriZavrsavaLiIspit = () => {
    if (brojTrenutnogPitanja === pitanja.length - 1) {
      setZavrsio(true);
    }
  };

  const resetujOdgovor = () => {
    setOdgovorio(false);
  };

  const pokreniPonovo = () => {
    setBrojTrenutnogPitanja(0);
    setZavrsio(false);
    setOdabraniOdgovor("");
    setBrojTacnihOdgovora(0);
  };

  if (!pitanja.length)
    return (
      <Box align="center" sx={{ width: "100%" }}>
        Loading....
      </Box>
    );

  return (
    <div>
      <Box align="center" sx={{ width: "100%" }}>
        <Grid
          container
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {zavrsio ? (
            <Card
              sx={{ borderRadius: "16px" }}
              style={{ backgroundColor: "black" }}
            >
              <CardContent>
                <Typography
                  align="center"
                  color="text.primary"
                  variant="paragraph"
                >{`Score ${brojTacnihOdgovora}/${pitanja.length}`}</Typography>
                <Box width={"100%"} mt={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => pokreniPonovo()}
                  >
                    Start again
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={() => navigate("/kviz")}
                  >
                    Back
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ) : (
            <div>
              <Card
                sx={{ borderRadius: "16px" }}
                style={{ backgroundColor: "black" }}
              >
                <CardContent>
                  <Typography
                    align="center"
                    color="text.primary"
                    variant="paragraph"
                  >
                    {`(${brojTrenutnogPitanja + 1}/${pitanja.length}) - ${
                      pitanja[brojTrenutnogPitanja].postavka
                    }`}
                  </Typography>
                  <Box>
                    {pitanja[brojTrenutnogPitanja].odgovori.map((answer, i) => (
                      <FormControl sx={{ m: 1 }} variant="standard" key={i}>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-error-radios"
                          name="quiz"
                          value={odabraniOdgovor}
                          onClick={() => provjeriOdgovor(answer)}
                        >
                          <FormControlLabel
                            value={answer}
                            name="answer"
                            control={<Radio />}
                            label={answer}
                          />
                        </RadioGroup>
                      </FormControl>
                    ))}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {brojTrenutnogPitanja === 0 && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="secondary"
                          onClick={() => navigate("/kviz")}
                        >
                          Back
                        </Button>
                      )}
                      {brojTrenutnogPitanja >= 1 && (
                        <Button
                          size="small"
                          variant="outlined"
                          color="secondary"
                          onClick={() => {
                            setBrojTrenutnogPitanja(brojTrenutnogPitanja - 1);
                            provjeriTacanOdgovor();
                          }}
                        >
                          Previous question
                        </Button>
                      )}
                      {odgovorio && (
                        <>
                          {brojTrenutnogPitanja < pitanja.length - 1 && (
                            <Button
                              size="small"
                              variant="outlined"
                              color="secondary"
                              onClick={() => {
                                setBrojTrenutnogPitanja(
                                  brojTrenutnogPitanja + 1
                                );
                                provjeriTacanOdgovor();
                                resetujOdgovor();
                              }}
                            >
                              Next question
                            </Button>
                          )}
                          {brojTrenutnogPitanja === pitanja.length - 1 && (
                            <Button
                              size="small"
                              variant="outlined"
                              color="secondary"
                              onClick={() => provjeriZavrsavaLiIspit()}
                            >
                              End
                            </Button>
                          )}
                        </>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </div>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default IspitnaPitanja;
