import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

const TasksPage = ({ token, onLogout }) => {
  const [tasks, setTasks] = useState([]);
  // Using the environment variable
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const TASK_ENDPOINT = API_URL + "/api/Tasks";
    const fetchTasks = async () => {
      try {
        const response = await axios.get(TASK_ENDPOINT, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, [token, API_URL]);

  return (
    <div>
      <Header onLogout={onLogout} />
      <div style={styles.taskContainer}>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} style={styles.task}>
                {task.task} ({task.role})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  taskContainer: {
    padding: "20px",
  },
  task: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  "@media (max-width: 600px)": {
    taskContainer: {
      padding: "10px",
    },
    task: {
      padding: "8px",
      fontSize: "14px",
    },
  },
};

export default TasksPage;
