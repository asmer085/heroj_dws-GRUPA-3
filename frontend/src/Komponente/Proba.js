import React, { useState, useEffect } from "react";
import { Document, Page, PDFViewer,Text} from '@react-pdf/renderer';


export default function PretragaLink(niz) {
  
  const searchInPDF = async (link, word) => {
    try {
      const response = await fetch(link);
      const buffer = await response.arrayBuffer();
      const data = new Uint8Array(buffer);
  
      const text = new TextDecoder('utf-8').decode(data);
      const regex = new RegExp(word, 'gi');
      const matches = text.match(regex) || [];
  
      return matches.length > 0;
    } catch (error) {
      console.error('Error searching in PDF:', error);
      return false;
    }
  };

  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const pdfLinks = ['http://127.0.0.1:8000/media/pdf-fajlovi/step-by-step.pdf','http://127.0.0.1:8000/media/pdf-fajlovi/CPR-guide.pdf'];

  useEffect(() => {
    const searchPDFs = async () => {
      const results = [];
      for (const link of pdfLinks) {
        const hasWord = await searchInPDF(link, searchWord);
        if (hasWord) {
          results.push(link);
        }
      }
      setSearchResults(results);
    };

    if (searchWord) {
      searchPDFs();
    }
  }, [searchWord]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter search word"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <PDFViewer>
        {searchResults.map((link, index) => (
          <Document key={index} file={link}>
            <Page>
              <Text>{link}</Text>
            </Page>
          </Document>
        ))}
      </PDFViewer>
    </div>
  );
};
