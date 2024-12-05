import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              setToken={(token) => {
                setToken(token);
                localStorage.setItem("token", token);
              }}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            token ? (
              <TasksPage token={token} onLogout={handleLogout} />
            ) : (
              <LoginPage
                setToken={(token) => {
                  setToken(token);
                  localStorage.setItem("token", token);
                }}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
