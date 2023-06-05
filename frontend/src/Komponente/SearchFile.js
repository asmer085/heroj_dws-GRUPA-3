import React, {useEffect, useState } from 'react';
import Navbar2 from "./Navbar2"
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import { TextField } from '@mui/material';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'pdfjs-dist';
import PDFFajl from "./PDFFajl"

export default function SearchFile() {
    
 const [inputValue, setInputValue] = useState('');

var TRange=null;


const handleSubmit = (event) => {
    event.preventDefault();
    // Ovde možete koristiti inputValue za dalje manipulacije sa vrednošću ulaznog polja
    findString(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }; 

  function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
      // CODE FOR BROWSERS THAT SUPPORT window.find
      strFound = window.find(str);
      if (!strFound) {
        strFound = window.find(str, 0, 1);
        while (window.find(str, 0, 1)) continue;
      }
    } else if (navigator.appName.indexOf('Microsoft') !== -1) {
      // EXPLORER-SPECIFIC CODE
      if (TRange !== null) {
        TRange.collapse(false);
        strFound = TRange.findText(str);
        if (strFound) TRange.select();
      }
      if (TRange == null || strFound == 0) {
        TRange = window.document.body.createTextRange();
        strFound = TRange.findText(str);
        if (strFound) TRange.select();
      }
    } else if (navigator.appName === 'Opera') {
      alert('Opera browsers not supported, sorry...');
      return;
    }
    if (!strFound) alert("String '" + str + "' not found!");
    return;
  }
    return (
        <>
        <Navbar2/>
        <Typography variant="h6">naslov1 naslov2</Typography>

    <form onSubmit={handleSubmit}>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="primary">Pretrazi</Button>
    </form>
    
        </>
    )
}