# Task Manager App

This is a simple React app that allows users to log in, view tasks, and log out. The app consists of two main pages:

- **Login Page**: Where users can log in with their username and password.
- **Tasks Page**: Where users can view their tasks after logging in.

The app also includes a header with a logout button to clear the user token and return to the login page.

## Features

- User authentication with a login page.
- Display of tasks on the tasks page.
- Logout functionality to clear the authentication token.

## Technologies Used

- React
- Axios (for API calls)
- React Router (for navigation)
- CSS (for styling)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm**: npm is bundled with Node.js, but ensure it is updated by running `npm install -g npm`.

## Getting Started

Follow these steps to run the app locally:

### 1. Clone the Repository

Clone the repository to your local machine.

```bash
git clone https://github.com/saurabhabh/task-manager.git
```
### 2.  Install Dependencies
```bash
cd task-manager
npm install
```

### 3. Run the App Locally
```bash
npm start
```

### 4. Backend API
The app makes requests to a local API running at http://localhost:7297. You need to have the backend API running locally to interact with the app. Here's how to start the backend:

- Clone the backend repository (if it's in a separate repo).
- Follow the backend's README to start the API locally.
- Ensure the API is running and accessible at http://localhost:7297.

### 5. Logging In
- Navigate to the Login Page.
- Enter the username and password:
    - Username: user
    - Password: user123

    - Username: admin
    - Password: admin123

These credentials will be used to authenticate the user.

### 6. Viewing Tasks
After logging in, you will be redirected to the Tasks Page, where you can view a list of tasks fetched from the API. The tasks will be displayed as a list, each with a task name and role.

### 7. Logging Out
To log out, click the Logout button on the top header. This will:

- Clear the authentication token from memory.
- Redirect you back to the Login page.