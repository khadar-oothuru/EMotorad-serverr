# EMotorad Server

This is a backend server for the EMotorad application, built using Express.js, MongoDB, and Passport.js for authentication. It provides routes for user authentication, session management, and user-related operations.

## Features
- User authentication using Passport.js
- MongoDB integration for data storage
- User routes for performing CRUD operations
- CORS support for cross-origin requests
- Session management for persistent login

## Installation

Follow these steps to get the server up and running locally:

### 1. Clone the repository
Clone the repository to your local machine using:

git clone https://github.com/khadar-oothuru/EMotoradServer
### 2. Install dependencies
Navigate to the project directory and install the required dependencies:


cd <project-directory>
npm install
### 3. Set up environment variables
Create a .env file in the root of the project and add the following variables:
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
SESSION_SECRET=your-session-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
PORT=5000

### 4. Start the server
Run the following command to start the server:


npm start

The server will be running on http://localhost:5000.

API Routes
Authentication Routes
POST /auth/login - User login
POST /auth/register - User registration
GET /auth/logout - User logout

User Routes (protected)
GET /api/user - Get user information (requires authentication)
PUT /api/user - Update user information (requires authentication)
DELETE /api/user - Delete user account (requires authentication)

## Usage
### This project uses the following technologies:
Node.js
Express.js
MongoDB
Passport.js
CORS
dotenv

