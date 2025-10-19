# Portfolio Project Setup Guide

This guide will help you set up and run the portfolio project locally on your Windows machine.

## Prerequisites

Before starting, make sure you have the following installed:

1. **Python 3.8+** - Download from [python.org](https://www.python.org/downloads/)
2. **Node.js 16+** - Download from [nodejs.org](https://nodejs.org/)
3. **MongoDB** (Optional) - Download from [mongodb.com](https://www.mongodb.com/try/download/community)

## Quick Start

### Option 1: Use the provided batch files (Recommended)

1. **Start everything at once:**
   ```bash
   start_all.bat
   ```
   This will start both backend and frontend automatically.

2. **Or start them separately:**
   ```bash
   # Terminal 1 - Backend
   start_backend.bat
   
   # Terminal 2 - Frontend  
   start_frontend.bat
   ```

### Option 2: Manual setup

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   python -m pip install -r requirements.txt
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```env
   # MongoDB Configuration
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=portfolio_db
   
   # CORS Configuration
   CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
   
   # Server Configuration
   HOST=0.0.0.0
   PORT=8000
   ```

4. Start the backend server:
   ```bash
   python start_server.py
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Accessing the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## Project Structure

```
portfolio-main/
├── backend/                 # FastAPI backend
│   ├── server.py           # Main server file
│   ├── start_server.py     # Startup script
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables (create this)
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── utils/         # Utility functions
│   │   └── ...
│   ├── package.json       # Node.js dependencies
│   └── ...
├── start_all.bat          # Start both servers
├── start_backend.bat      # Start backend only
├── start_frontend.bat     # Start frontend only
└── SETUP_GUIDE.md         # This file
```

## Environment Variables

The backend requires the following environment variables. Create a `.env` file in the `backend` directory:

```env
# MongoDB Configuration
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db

# CORS Configuration  
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Server Configuration
HOST=0.0.0.0
PORT=8000
```

## Troubleshooting

### Common Issues

1. **Port already in use**: If ports 3000 or 8000 are already in use, you can change them in the respective configuration files.

2. **Python dependencies not installing**: Make sure you have Python 3.8+ installed and pip is up to date:
   ```bash
   python -m pip install --upgrade pip
   ```

3. **Node.js dependencies not installing**: Make sure you have Node.js 16+ installed:
   ```bash
   node --version
   npm --version
   ```

4. **MongoDB connection issues**: The app will work without MongoDB for the frontend, but the backend API endpoints that require database access won't work. Install MongoDB locally or use MongoDB Atlas for a cloud database.

### Getting Help

If you encounter any issues:
1. Check that all prerequisites are installed
2. Ensure all dependencies are installed correctly
3. Check that the ports 3000 and 8000 are available
4. Verify the `.env` file is created in the backend directory

## Development Notes

- The frontend uses mock data, so it will work without the backend
- The backend provides API endpoints for future data integration
- Hot reload is enabled for both frontend and backend during development
- The project uses Tailwind CSS for styling and Framer Motion for animations
