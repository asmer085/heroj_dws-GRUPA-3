import LogovaniNavbar from "./LogovaniNavbar";
import MojGrid from "./Kartice"
import axios from 'axios';
import React, { useEffect, useState } from 'react';



function Logovani() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
              const response = await axios.get('http://127.0.0.1:8000/api/v1/user/info/', {
                headers: {
                  Authorization: `Token ${localStorage.getItem('token')}`, // Include the user's authentication token
                },
              });
              setUserData(response.data);
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };

    fetchUserData();
  }, []);

  //Dakle, imenu i prezimenu se pristupa preko userData.name i userData.surname

    return (
        <>
        <LogovaniNavbar/>
        <br/>
        <MojGrid/>
        </>
    )
}

export default Logovani;