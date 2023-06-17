import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
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
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Token ${token}` };

      const response = await axios.get('http://127.0.0.1:8000/api/pdffajlovi/', { headers });
      setData(response.data);
    } catch (error) {
      console.error('Greška prilikom dohvata podataka:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const results = [];
      for (const pdfPath of data) {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
        const pdf = await pdfjs.getDocument(pdfPath.fajl).promise;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const matches = content.items.filter(item => item.str.includes(searchTerm));

          if (matches.length > 0) {
            matches.forEach(match => {
              results.push({
                pdfPath: pdfPath.fajl,
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
      <Button variant="contained" onClick={handleSearch} sx={{ marginTop: '15px', marginLeft: '5px', backgroundColor: 'red' }}>
        Search
      </Button>

      <List>
        {searchResults.map((result, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Found in the file: ${result.pdfPath}, na stranici ${result.pageNum}`}
            />
            <a
              href={`${result.pdfPath}#page=${result.pageNum}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PretragaFajlova;
