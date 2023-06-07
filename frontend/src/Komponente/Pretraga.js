import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { alpha, styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import PretragaDialog from "./PretragaDialog";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const apiURL = "http://127.0.0.1:8000/api/v1/simptomi/";

function Pretraga() {
  const [inputVrijednost, setInputVrijednost] = useState("");
  const [nesrece, setNesrece] = useState(null);
  const [odabranaNesreca, setOdabranaNesreca] = useState(null);
  const [otvorenDialogPretrage, setOtvorenDialogPretrage] = useState(false);
  
  const otvoriDialogPretrage = (nesreca) => {
    setOdabranaNesreca(nesreca);
    setOtvorenDialogPretrage(true);
  };
  const zatvoriDialogPretrage = () => {
    setOdabranaNesreca(null);
    setOtvorenDialogPretrage(false);
  };

  useEffect(() => {
    if (!inputVrijednost) return;

    axios
      .get(apiURL + "?naziv__icontains=" + inputVrijednost)
      .then((response) => {
        setNesrece(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [inputVrijednost]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Pretraži…"
          onInput={(e) => {
            setInputVrijednost(e.target.value);
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      {inputVrijednost && nesrece ? (
        <List sx={{ pt: 0 }}>
          {nesrece.map((result) => (
            <ListItem key={result.id}>
              <ListItemButton
                onClick={() => otvoriDialogPretrage(result)}
                key={result.id}
              >
                <ListItemText primary={result.naziv} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
      <PretragaDialog
        odabranaNesreca={odabranaNesreca}
        otvorenDialogPretrage={otvorenDialogPretrage}
        zatvoriDialogPretrage={zatvoriDialogPretrage}
      />
    </>
  );
}

export default Pretraga;