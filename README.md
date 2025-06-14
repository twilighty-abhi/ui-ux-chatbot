# Blinky - The UI/UX Analyzer Chatbot

Blinky is a smart UI/UX analyzer chatbot designed to help designers and developers improve their user interfaces. By uploading a design image, users can receive an expert-level analysis based on established UI/UX principles. This version features a beautiful custom design with premium typography, modern interface, and **integrated server architecture**.

## ✨ Features

-   **AI-Powered Analysis**: Leverages Google Gemini to analyze UI designs with detailed feedback.
-   **Secure API Key Handling**: API key is managed securely on the backend via an environment file.
-   **Authentication Flow**: Clean login/signup system with modern design aesthetics and development mode for easy testing.
-   **Integrated Server**: Single Flask server serves both frontend and backend for simplified deployment.
-   **Custom Design System**: 
    - **Typography**: Lobster font for branding, Playfair Display for elegant text, DM Serif Display for buttons
    - **Custom Frame**: Beautiful rounded frame design for upload interface
    - **Professional UI**: Black and white color scheme with custom background
-   **Image Upload Interface**: Intuitive drag-and-drop style upload with custom icons.
-   **Detailed Feedback**: Comprehensive analysis including ratings, strengths, weaknesses, and actionable suggestions.
-   **Responsive Design**: Optimized for various screen sizes and devices.
-   **Client-Side Routing**: Smooth navigation using React Router.
-   **Development Mode**: Easy testing with mock authentication (no Firebase setup required).

## 🎨 Design Features

- **Premium Typography**: 
  - Lobster font for "Blinky" branding
  - Playfair Display for taglines and sign-in elements
  - DM Serif Display for action buttons
  - Poppins for body text
- **Custom Frame Design**: Upload interface with beautiful rounded frame
- **Professional Color Scheme**: Clean black and white aesthetic
- **Background Design**: Custom full-page background for immersive experience
- **Modern Icons**: Custom SVG upload icons for better user experience

## 🏗️ Architecture

This application now uses an **integrated server architecture**:
- **Single Flask Server**: Serves both React frontend (as static files) and handles API requests
- **No Proxy Needed**: Frontend and backend run on the same port (5000)
- **Simplified Deployment**: One server to manage instead of two separate services
- **Development Mode**: Built-in authentication simulation for easy testing

## 📂 Project Structure

```
.
├── api/
│   ├── .env.example       # Example for environment variables
│   ├── index.py           # Integrated Flask server (frontend + backend)
│   └── prompt.txt         # The knowledge base for the AI
│
├── frontend/
│   ├── src/
│   │   ├── assets/        # Images and design assets
│   │   │   ├── bg.png     # Custom frame design
│   │   │   └── bgful.png  # Full page background
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── services/
│   │   │   └── authService.js  # Authentication with dev mode support
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx # Authentication state management
│   │   ├── styles/
│   │   │   └── LoginPage.css
│   │   ├── App.jsx        # Main component with routing
│   │   ├── App.css        # Main styling with custom design system
│   │   └── main.jsx       # React entry point
│   ├── dist/              # Built frontend files (served by Flask)
│   ├── vite.config.js     # Vite config for development
│   └── package.json       # Frontend dependencies
│
├── .gitignore
├── README.md
└── requirements.txt
```

## 🚀 Getting Started

### Prerequisites

-   [Python 3](https://www.python.org/downloads/) and `pip`
-   A **Gemini API Key** from [Google AI Studio](https://makersuite.google.com/app/apikey)
-   [Node.js](https://nodejs.org/) (only needed for frontend development)

### ⚡ Quick Start (Recommended)

**The fastest way to run your application:**

1.  **Clone and Setup:**
    ```bash
    git clone https://github.com/Adithya6ramesh/ui-ux-chatbot.git
    cd ui-ux-chatbot
    ```

2.  **Configure API Key:**
    ```bash
    cd api
    copy .env.example .env  # Windows
    # cp .env.example .env  # macOS/Linux
    ```
    Edit `.env` file and add your Gemini API key:
    ```
    GEMINI_API_KEY="your_actual_gemini_api_key_here"
    ```

3.  **Install Dependencies:**
    ```bash
    cd ..  # Back to root directory
    pip install -r requirements.txt
    ```

4.  **Start the Application:**
    ```bash
    cd api
    python index.py
    ```

5.  **Access Your App:**
    Open your browser and go to: **`http://localhost:5000`**

**That's it!** 🎉 Your complete application is running on **port 5000** with both frontend and backend integrated.

---

### 🛠 Advanced Development Setup

**Only needed if you want to modify the frontend code:**

1.  **Follow steps 1-3 above**

2.  **Install Frontend Dependencies:**
    ```bash
    npm install --prefix frontend
    ```

3.  **Build Frontend (after making changes):**
    ```bash
    npm run build --prefix frontend
    ```

4.  **Restart the Server:**
    ```bash
    cd api
    python index.py
    ```
    Access: **`http://localhost:5000`**

### 🔧 Alternative: Separate Development Servers

**Only for advanced development with live reload:**

```bash
# Terminal 1: Backend
cd api
python index.py

# Terminal 2: Frontend (for live changes)
cd frontend
npm run dev
# This will run on http://localhost:5173 with live reload
```

**Note:** Use `localhost:5000` for the integrated experience, or `localhost:5173` only when using separate development servers.

## 🎯 Application Flow

1.  **Login Page**: Beautiful authentication interface with Google sign-in option
2.  **Development Mode**: Easy testing - any email/password works, Google sign-in simulated
3.  **Home Page**: Features the main "Blinky" title with upload interface:
    - "Choose your File" text in Playfair Display
    - Custom upload icon with professional styling
    - "Analyze Design" button in DM Serif Display font
4.  **Analysis**: Upload UI/UX designs and get comprehensive AI-powered feedback
5.  **Navigation**: Clean sign-out functionality returns to login page

## 🔧 Configuration

### Authentication Modes

The application supports two authentication modes:

**Development Mode (Default - `DEV_MODE = true`):**
- ✅ No Firebase setup required
- ✅ Any email/password combination works
- ✅ Google sign-in is simulated
- ✅ Perfect for testing and development

**Production Mode (`DEV_MODE = false`):**
- 🔥 Requires proper Firebase configuration
- 🔥 Real Google authentication
- 🔥 Real user accounts

To switch modes, edit `frontend/src/services/authService.js`:
```javascript
const DEV_MODE = true;  // Set to false for production
```

## 🛠 Development Notes

- **Integrated Architecture**: Single Flask server handles everything
- **Font Loading**: Custom Google Fonts integrated for premium typography
- **Asset Management**: Custom images stored in `frontend/src/assets/`
- **Styling Architecture**: Centralized CSS with design system approach
- **Component Structure**: Clean separation of pages and styling
- **Background Handling**: Fixed background with cover sizing for immersive experience
- **Authentication**: Flexible development/production modes for easy testing

## 📝 API Endpoints

When running, your integrated server provides:

- **`GET /`** - Serves the React frontend
- **`POST /api/analyze`** - Analyzes uploaded UI/UX designs
- **`POST /analyze`** - Legacy endpoint (backward compatibility)
- **Static files** - All frontend assets (CSS, JS, images)

## 🌿 Git Branches

This repository has two primary branches:

-   **`main`**: The current version with integrated server architecture and development-friendly authentication.
-   **`feature/user-api-key`**: An alternate version where the user must provide their own API key in an input field on the frontend.

## 🚀 Deployment

For production deployment:

1. Set `DEV_MODE = false` in `authService.js`
2. Configure Firebase authentication  
3. Build frontend: `npm run build --prefix frontend`
4. Deploy the Flask server with the built frontend files

---

## 🎉 What's New in This Version

- ✅ **Integrated Server**: Single Flask app serves both frontend and backend
- ✅ **Simplified Setup**: One command to run everything
- ✅ **Development Mode**: Easy testing without Firebase setup
- ✅ **Better Authentication**: Proper login flow with Google sign-in
- ✅ **No Proxy Errors**: Everything runs on one port
- ✅ **Production Ready**: Easy switch between development and production modes

---
_This README reflects the latest version of the `main` branch with integrated server architecture._ 