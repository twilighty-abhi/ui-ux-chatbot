# Blinky - The UI/UX Analyzer Chatbot

Blinky is a smart UI/UX analyzer chatbot designed to help designers and developers improve their user interfaces. By uploading a design image, users can receive an expert-level analysis based on established UI/UX principles, a rating, and actionable suggestions for enhancement.

## ✨ Features

-   **AI-Powered Analysis**: Leverages a powerful generative AI to analyze UI designs.
-   **Image Upload**: Simple interface to upload UI mockups or screenshots.
-   **Detailed Feedback**: Provides a rating, strengths, weaknesses, and suggestions based on dozens of UI/UX rules.
-   **Aesthetic UI**: A beautiful, custom-styled interface with a pastel lavender theme.
-   **Markdown Rendering**: Displays the analysis in a clean, readable format.

## 🛠️ Tech Stack

-   **Frontend**: React (with Vite), Axios
-   **Backend**: Python, Flask, Google Gemini AI
-   **Styling**: CSS with Google Fonts

## 📂 Project Structure

```
.
├── backend/
│   ├── app.py             # Flask server for the backend
│   ├── prompt.txt         # The knowledge base for the AI
│   ├── requirements.txt   # Python dependencies
│   └── .env               # For API keys (ignored by Git)
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   └── background.jpg # Background image
│   │   ├── App.css          # Main styles for the app
│   │   ├── App.jsx          # Main React component
│   │   └── main.jsx         # React entry point
│   ├── index.html         # Main HTML file
│   └── package.json       # Frontend dependencies
│
└── .gitignore             # Files and folders to ignore
└── README.md              # This file
```

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm)
-   [Python 3](https://www.python.org/downloads/) and `pip`

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd ui-ux-chatbot
```

### 2. Backend Setup

First, set up and run the backend server.

```bash
# Navigate to the backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Create an environment file
# (You can copy .env.example if it exists)
touch .env

# Add your Gemini API key to the .env file
# GEMINI_API_KEY="YOUR_API_KEY_HERE"

# Run the backend server
python app.py
```

The backend will be running at `http://localhost:5000`.

### 3. Frontend Setup

Open a **new terminal** for the frontend.

```bash
# Navigate to the frontend directory
cd frontend

# Install npm dependencies
npm install

# Run the frontend development server
npm run dev
```

The frontend application will be accessible at `http://localhost:5173` (or the next available port).

### 🔥 Simpler Method (Recommended)

Once you have set up your `.env` file in the backend, you can run both the frontend and backend servers with a single command from the `frontend` directory:

```bash
# From the frontend directory
npm run dev:fullstack
```

This will start both servers and you can view the application at `http://localhost:5173`.

## USAGE
1. Open the application in your browser.
2. Click "Choose a file" to select a UI design image.
3. Click "Analyze Design" to submit it for analysis.
4. View the detailed feedback in the results section. 