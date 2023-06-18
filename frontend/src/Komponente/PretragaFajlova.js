import { PDFDocument, rgb } from 'pdf-lib';
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText,Box } from '@mui/material';
import pdf1 from './pdf-fajlovi/CPR-guide.pdf';
import pdf2 from './pdf-fajlovi/Dinamički_web_sistemi_77Ck3qh.pdf';
import pdf3 from './pdf-fajlovi/Dinamički_web_sistemi_brlXOLh.pdf';
import pdf4 from './pdf-fajlovi/Dinamički_web_sistemi_eBGjnZj.pdf';
import pdf5 from './pdf-fajlovi/first-aid-manual.pdf';
import pdf6 from './pdf-fajlovi/First_Aid_Law_Advocacy_Report.pdf';
import pdf7 from './pdf-fajlovi/step-by-step.pdf';
import pdf8 from './pdf-fajlovi/Dinamički_web_sistemi.pdf';

import pdfjsLib from 'pdf-lib';
import Pretraga from './Pretraga2';


function PretragaFajlova(niz) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  var pdfjsLib = window['pdfjs-dist/build/pdf'];

  // The workerSrc property shall be specified.
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
  const handleSearch = async () => {
    console.log(niz);
    const pdfPaths = [pdf1,pdf2,pdf3,pdf4,pdf5,pdf6,pdf7,pdf8];

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
    <Box  sx={{ marginTop: '50px',borderRadius:"15px",borderColor:"red",width:"400px" }}>
      <Pretraga
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      
      <Button variant="contained" size='small' onClick={handleSearch} sx={{backgroundColor:'red',borderRadius:"8px",marginTop:"15px",marginLeft:"5px" }}>
        Search
      </Button>

      <List>
        {searchResults.map((result, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Found in: `}/>
            <Button
              color = 'primary'
              sx={{ backgroundColor: 'red',borderRadius:"8px",marginLeft:"5px" }}
              variant="contained"
              href={`${result.pdfPath}#page=${result.pageNum}`}
              target="_blank"
              rel="noopener noreferrer"
            >View
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PretragaFajlova;
