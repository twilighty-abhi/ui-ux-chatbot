# Blinky - The UI/UX Analyzer Chatbot

Blinky is a smart UI/UX analyzer chatbot designed to help designers and developers improve their user interfaces. By uploading a design image, users can receive an expert-level analysis based on established UI/UX principles, a rating, and actionable suggestions for enhancement.

## ✨ Features

-   **AI-Powered Analysis**: Leverages a powerful generative AI to analyze UI designs.
-   **Secure Login System**: Beautiful login page with email validation and Google login support.
-   **Image Upload**: Simple interface to upload UI mockups or screenshots.
-   **Detailed Feedback**: Provides a rating, strengths, weaknesses, and suggestions based on dozens of UI/UX rules.
-   **Aesthetic UI**: A beautiful, custom-styled interface with a pastel lavender theme.
-   **Markdown Rendering**: Displays the analysis in a clean, readable format.
-   **Responsive Design**: Works seamlessly on desktop and mobile devices.
-   **Form Validation**: Comprehensive validation for email and password inputs.

## 🛠️ Tech Stack

-   **Frontend**: React (with Vite), React Router DOM, Axios
-   **Backend**: Python, Flask, Google Gemini AI
-   **Styling**: CSS with Google Fonts (Poppins, Lobster)
-   **Routing**: React Router for navigation

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
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx  # Login page component
│   │   │   └── SignUpPage.jsx # Sign up page component
│   │   ├── styles/
│   │   │   ├── LoginPage.css  # Login page styles
│   │   │   └── SignUpPage.css # Sign up page styles
│   │   ├── App.css          # Main styles for the app
│   │   ├── App.jsx          # Main React component (Home page)
│   │   ├── main.jsx         # React entry point with routing
│   │   └── index.css        # Global styles
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

## 🎯 Application Flow

### 1. Landing Page (Login)
- Visit `http://localhost:5173/` to access the login page
- Enter your email and password (with validation)
- Or use "Login with Google" (coming soon feature)
- Form validation ensures proper email format and required fields

### 2. Home Page (UI/UX Analyzer)
- After successful login, you're redirected to `/home`
- Upload UI design images for analysis
- Get detailed AI-powered feedback
- Access "Sign Up" link in the top-right corner to return to login

### 3. Navigation
- **Login** → **Home Page** → **Sign Up Link** → **Back to Login**

## 🔐 Authentication Features

- **Email Validation**: Checks for proper email format (@domain)
- **Password Validation**: Ensures password is not empty
- **Error Handling**: Clear error messages for validation failures
- **Google Login**: UI ready for Google OAuth integration
- **Responsive Design**: Login page works on all device sizes

## ☁️ Deployment on Vercel

This project is configured for easy deployment on [Vercel](https://vercel.com/).

1.  Push your code to your GitHub repository.
2.  Go to Vercel and import your project from GitHub.
3.  Vercel will automatically detect the configuration. You just need to set your environment variable.
4.  In the project settings, navigate to the **Environment Variables** section.
5.  Add `GEMINI_API_KEY` with its value.
6.  Click **Deploy**. Vercel will build and deploy your application.

## 📱 Usage

### Login Process
1. Open the application in your browser at `http://localhost:5173/`
2. You'll land on the beautiful login page
3. Enter a valid email address (must contain @)
4. Enter a password
5. Click "Login" to access the analyzer

### UI/UX Analysis
1. After logging in, you'll be on the home page
2. Click "Choose a file" to select a UI design image
3. Click "Analyze Design" to submit it for analysis
4. View the detailed feedback in the results section
5. Use the "Sign Up" link in the top-right corner if needed

## 🎨 Design Features

- **Pastel Lavender Theme**: Consistent, calming color scheme
- **Modern Typography**: Poppins and Lobster fonts
- **Smooth Animations**: Hover effects and transitions
- **Mobile Responsive**: Adapts to different screen sizes
- **Clean Layout**: Intuitive and user-friendly interface 