import { PDFDocument, rgb } from 'pdf-lib';
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import pdf1 from './CPR-guide.pdf';
import pdfjsLib from 'pdf-lib';

function PretragaFajlova() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  var pdfjsLib = window['pdfjs-dist/build/pdf'];

  // The workerSrc property shall be specified.
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
  const handleSearch = async () => {
    const pdfPaths = [pdf1];

    try {
      const results = [];
      for (const pdfPath of pdfPaths) {
        const loadingTask = pdfjsLib.getDocument(pdfPath);
        const pdf = await loadingTask.promise;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const matches = content.items.filter(item => item.str.includes(searchTerm));

          if (matches.length > 0) {
            results.push({
              pdfPath,
              pageNum,
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
        sx={{ marginTop: '10px',backgroundColor:"red",borderRadius:"15px",borderColor:"red",width:"500px" }}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <Button variant="contained" onClick={handleSearch} sx={{backgroundColor:'red',borderRadius:"8px",marginTop:"15px",marginLeft:"5px" }}>
        Search
      </Button>

      <List>
        {searchResults.map((result, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Pronađeno u datoteci: ${result.pdfPath}, na stranici ${result.pageNum}`} />
            <Button
              sx={{ backgroundColor: 'red',borderRadius:"8px",marginLeft:"5px" }}
              variant="outlined"
              href={`${result.pdfPath}#page=${result.pageNum}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PretragaFajlova;
