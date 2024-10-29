// src/HomePage.js

import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to signup page
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to My App</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleLoginClick}>
          Login
        </button>
        <button style={styles.button} onClick={handleSignupClick}>
          Signup
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export default HomePage;
