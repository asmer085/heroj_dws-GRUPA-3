import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewFajlove = ({ fileId }) => {
  const [fileUrl, setFileUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fileId) {
      const apiUrl = `http://127.0.0.1:8000/api/pdffajlovi/${fileId}/`;
      const token = localStorage.getItem('token');
      setIsLoading(true); // Set loading state to true before making the request
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then(response => {
          console.log('API Response:', response.data);
          setFileUrl(response.data.fajl); // Set the file URL from the response data
        })
        .catch(error => {
          console.error('Error fetching file:', error);
        })
        .finally(() => {
          setIsLoading(false); // Set loading state to false after the request is completed
        });
    }
  }, [fileId]);

  const handleSubmit = e => {
    e.preventDefault();
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      console.error('File URL is empty.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Go to File" />
    </form>
  );
};

const IzlistajFajlove = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const baseURL = 'http://127.0.0.1:8000/api/pdffajlovi/';
    const token = localStorage.getItem('token');

    axios
      .get(baseURL, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {posts.map(post => (
        <ViewFajlove key={post.id} fileId={post.id} />
      ))}
    </>
  );
};

export default IzlistajFajlove;
