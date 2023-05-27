import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // logika logouta
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect na stranicu nakon uspjesnog logouta
    navigate("/login");
  };

  return (
    <Box textAlign="center">
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
