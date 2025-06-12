# Blinky - The UI/UX Analyzer Chatbot

Blinky is a smart UI/UX analyzer chatbot designed to help designers and developers improve their user interfaces. By uploading a design image, users can receive an expert-level analysis based on established UI/UX principles. This version is configured to use a server-side API key for security and ease of use.

## ✨ Features

-   **AI-Powered Analysis**: Leverages Google Gemini to analyze UI designs.
-   **Secure API Key Handling**: API key is managed securely on the backend via an environment file.
-   **Authentication Flow**: A clean, modern login page is the entry point to the application, with a sign-out feature.
-   **Image Upload**: Simple interface to upload UI mockups or screenshots.
-   **Detailed Feedback**: Provides a rating, strengths, weaknesses, and suggestions.
-   **Modern UI**: A beautiful, custom-styled interface.
-   **Client-Side Routing**: Uses React Router for a smooth single-page application experience.
-   **Development Proxy**: Configured for a seamless development experience where the frontend and backend work under one link.

## 📂 Project Structure

```
.
├── api/
│   ├── .env.example       # Example for environment variables
│   ├── index.py           # Flask server for the backend
│   └── prompt.txt         # The knowledge base for the AI
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── styles/
│   │   │   └── LoginPage.css
│   │   ├── App.jsx          # Main component with routing
│   │   └── main.jsx         # React entry point
│   ├── vite.config.js     # Vite config with proxy setup
│   └── package.json       # Frontend dependencies
│
├── .gitignore
├── README.md
└── requirements.txt
```

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm)
-   [Python 3](https://www.python.org/downloads/) and `pip`
-   A **Gemini API Key** from [Google AI Studio](https://makersuite.google.com/app/apikey)

### 1. Clone the Repository

```bash
git clone https://github.com/Adithya6ramesh/ui-ux-chatbot.git
cd ui-ux-chatbot
```

### 2. Backend Setup

First, configure your server-side API key.

1.  **Navigate to the `api` directory:**
    ```bash
    cd api
    ```
2.  **Create an environment file:**
    Copy the example file to a new `.env` file.
    ```bash
    # For Windows (Command Prompt)
    copy .env.example .env

    # For macOS/Linux
    cp .env.example .env
    ```
3.  **Add your API Key:**
    Open the newly created `.env` file and paste your Gemini API key.
    ```
    GEMINI_API_KEY="your_actual_gemini_api_key_here"
    ```
4.  **Install dependencies and run the server:**
    Navigate back to the root directory.
    ```bash
    cd ..
    pip install -r requirements.txt
    python api/index.py
    ```
The backend will now be running at `http://localhost:5000`.

### 3. Frontend Setup

Open a **new terminal** for the frontend.

1.  **Install dependencies:**
    From the project root directory, run:
    ```bash
    npm install --prefix frontend
    ```
2.  **Run the frontend server:**
    ```bash
    npm run dev --prefix frontend
    ```

The application will be accessible at `http://localhost:5173`. Thanks to the proxy configuration, you can use this single link for all interactions.

## 🎯 Application Flow

1.  **Landing Page**: The user lands on the Login Page at `http://localhost:5173/`.
2.  **Login**: The user enters their credentials and is navigated to the home page.
3.  **Home Page**: At `/home`, the user can upload a design for analysis.
4.  **Sign Out**: A "Sign Out" button in the corner navigates the user back to the login page.

## 🌿 Git Branches

This repository has two primary branches:

-   **`main`**: The current, primary version of the application with a secure backend API key and login flow.
-   **`feature/user-api-key`**: An alternate version where the user must provide their own API key in an input field on the frontend.

---
_This README reflects the state of the `main` branch._ 