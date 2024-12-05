import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <h1>Task Manager</h1>
      <button onClick={handleLogout} style={styles.button}>
        Logout
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    flexWrap: "wrap", // This will allow items to stack on smaller screens
  },
  button: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px", // Added margin to separate from header text on small screens
  },
  "@media (max-width: 600px)": {
    header: {
      flexDirection: "column", // Stack items vertically on small screens
      textAlign: "center", // Center the header text
    },
    button: {
      width: "100%", // Make button take full width on mobile
    },
  },
};

export default Header;
