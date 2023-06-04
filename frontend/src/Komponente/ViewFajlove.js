import React, { useState, useEffect } from 'react';
import FileViewer from 'react-file-viewer';

const ViewFajlove = ({ fileId }) => {
    const [fileUrl, setFileUrl] = useState('');
   
    useEffect(() => {
       fetch('/files/${fileId}/', {method:'GET'}, { headers: {'Accept': 'application/json',  'Content-Type': 'application/json',}})
         .then(response => response.json())
         .then(data => {
           setFileUrl(data.fileUrl);
         })
         .catch(error => console.error('Error fetching file:', error));
     }, [fileId]);
     return (
       <div>
         {fileUrl && (
           <FileViewer
             fileType="pdf"
             filePath={fileUrl}
           />
         )}
       </div>
     );
   }
   
export default ViewFajlove
