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

function Pretraga2({value,onChange,theme}) {
    return (
        <Search>
            <InputBase placeholder=" Search" inputProps={{ 'aria-label': 'search' }} value={value} onChange={onChange}/>
        </Search>
    )
}

export default Pretraga2;