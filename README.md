# Blinky - The UI/UX Analyzer Chatbot

Blinky is a smart UI/UX analyzer chatbot designed to help designers and developers improve their user interfaces. By uploading a design image, users can receive an expert-level analysis based on established UI/UX principles. This version features a beautiful custom design with premium typography and a modern interface.

## ✨ Features

-   **AI-Powered Analysis**: Leverages Google Gemini to analyze UI designs with detailed feedback.
-   **Secure API Key Handling**: API key is managed securely on the backend via an environment file.
-   **Authentication Flow**: Clean login/signup system with modern design aesthetics.
-   **Custom Design System**: 
    - **Typography**: Lobster font for branding, Playfair Display for elegant text, DM Serif Display for buttons
    - **Custom Frame**: Beautiful rounded frame design for upload interface
    - **Professional UI**: Black and white color scheme with custom background
-   **Image Upload Interface**: Intuitive drag-and-drop style upload with custom icons.
-   **Detailed Feedback**: Comprehensive analysis including ratings, strengths, weaknesses, and actionable suggestions.
-   **Responsive Design**: Optimized for various screen sizes and devices.
-   **Client-Side Routing**: Smooth navigation using React Router.
-   **Development Proxy**: Seamless frontend-backend integration.

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
│   │   ├── assets/        # Images and design assets
│   │   │   ├── bg.png     # Custom frame design
│   │   │   └── bgful.png  # Full page background
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── styles/
│   │   │   └── LoginPage.css
│   │   ├── App.jsx        # Main component with routing
│   │   ├── App.css        # Main styling with custom design system
│   │   └── main.jsx       # React entry point
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

1.  **Landing Page**: Users start at the Login Page with beautiful typography and design.
2.  **Authentication**: Clean login/signup flow with Playfair Display fonts.
3.  **Home Page**: Features the main "Blinky" title with custom upload frame containing:
    - "Choose your File" text in Playfair Display
    - Custom upload icon with professional styling
    - "Analyze Design" button in DM Serif Display font
4.  **Analysis**: Comprehensive UI/UX feedback with detailed markdown formatting.
5.  **Navigation**: "Sign In" link in top corner using Playfair Display font.

## 🛠 Development Notes

- **Font Loading**: Custom Google Fonts integrated for premium typography
- **Asset Management**: Custom images stored in `frontend/src/assets/`
- **Styling Architecture**: Centralized CSS with design system approach
- **Component Structure**: Clean separation of pages and styling
- **Background Handling**: Fixed background with cover sizing for immersive experience

## 🌿 Git Branches

This repository has two primary branches:

-   **`main`**: The current, primary version of the application with a secure backend API key and login flow.
-   **`feature/user-api-key`**: An alternate version where the user must provide their own API key in an input field on the frontend.

---
_This README reflects the state of the `main` branch._ 