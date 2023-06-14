import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import pdfjsLib from 'pdfjs-dist';
import axios from 'axios';


function PretragaFajlova() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
   
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pdffajlovi/');
      setData(response.data);
    } catch (error) {
      console.error('Greška prilikom dohvata podataka:', error);
    }
  };

  const handleSearch = async () => {
    // Kreirajte niz putanja do PDF datoteka
    
    try {
      const results = [];
      for (const pdfPath of data) {
        const loadingTask = pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const matches = content.items.filter(item => item.str.includes(searchTerm));

          if (matches.length > 0) {
            matches.forEach(match => {
              results.push({
                pdfPath,
                pageNum,
                boundingRect: match.transform,
              });
            });
          }
        }
      }

      setSearchResults(results);
    } catch (error) {
      console.error('Greška prilikom pretrage PDF datoteka:', error);
    }
  };

  return (
    <div>
      <TextField
        sx={{ marginTop: '10px' }}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}  sx={{ marginTop: '15px',marginLeft:'5px',backgroundColor:'red'}}>
        Search
      </Button>

      <List>
        {searchResults.map((result, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Found in the file: ${result.pdfPath}, na stranici ${result.pageNum}`}
            />
            <Button
              sx={{backgroundColor:'red'}}
              variant="contained"
              href={`${result.pdfPath}#page=${result.pageNum}`}>
              View
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PretragaFajlova;