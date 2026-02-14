# 🚀 ForgeUI

ForgeUI is an AI-powered UI generation platform that transforms natural
language prompts into fully functional React interfaces in real time.

It combines AI generation, live code editing, deterministic system
components, and version control into a single interactive development
workspace.

------------------------------------------------------------------------

# ✨ Features

## 🔥 AI-Powered UI Generation

Describe your UI in plain English:

> "Create a dashboard with sidebar and analytics cards"

ForgeUI will: - Generate a layout plan - Produce React JSX code -
Provide an explanation - Render it instantly in live preview

------------------------------------------------------------------------

## 🧠 Dual Mode Architecture

### 1️⃣ Dynamic Mode

-   Fully AI-generated JSX
-   Live rendering using react-live
-   Flexible layout generation

### 2️⃣ Deterministic Mode

-   Uses predefined system components
-   Controlled UI structure
-   Reusable architecture

------------------------------------------------------------------------

## 📝 Live Code Editing

-   Monaco Editor integration
-   Real-time code updates
-   Editable AI-generated output

------------------------------------------------------------------------

## 👀 Live Preview Sandbox

-   Secure JSX wrapping
-   Error display in real time
-   Scroll-safe container
-   Prevents layout overflow

------------------------------------------------------------------------

## 🕘 Version History + Rollback

Every generation creates a version snapshot: - Plan - Code -
Explanation - Timestamp

You can: - Restore any previous version - Remove future versions -
Maintain iterative design history

------------------------------------------------------------------------

# 🏗️ Tech Stack

## Frontend

-   React (Vite)
-   Tailwind CSS
-   Monaco Editor
-   react-live
-   Axios

## Backend

-   Node.js
-   Express
-   OpenAI API
-   CORS Configuration
-   Environment-based setup

------------------------------------------------------------------------

# 📂 Project Structure

forge-ui/ │ ├── client/ │ ├── src/ │ ├── .env │ ├── server/ │ ├──
routes/ │ ├── server.js │ └── .env │ └── README.md

------------------------------------------------------------------------

# ⚙️ Environment Setup

## Backend `.env`

PORT=5001\
OPENAI_API_KEY=your_openai_api_key\
FRONTEND_URL=http://localhost:5173

------------------------------------------------------------------------

## Frontend `.env` (Vite)

VITE_API_URL=http://localhost:5001

------------------------------------------------------------------------

# 🚀 Running Locally

## Install Dependencies

Backend: cd server\
npm install

Frontend: cd client\
npm install

------------------------------------------------------------------------

## Start Backend

npm start

## Start Frontend

npm run dev

Open: http://localhost:5173

------------------------------------------------------------------------

# 🌍 Deployment

## Backend → Render

-   Root Directory: server
-   Build Command: npm install
-   Start Command: npm start

## Frontend → Vercel

-   Add Environment Variable:
    VITE_API_URL=https://your-backend-url.onrender.com

------------------------------------------------------------------------

# 🔄 How It Works

1.  User enters prompt\
2.  Frontend sends request to backend\
3.  Backend generates plan + JSX\
4.  Frontend renders preview\
5.  Version snapshot saved

------------------------------------------------------------------------

# 🔐 Security

-   CORS restricted via .env
-   No hardcoded API keys
-   Production-safe configuration

------------------------------------------------------------------------

# 💡 Future Improvements

-   Diff viewer
-   AI refactor mode
-   Drag-and-drop builder
-   Theme engine
-   Mobile preview

------------------------------------------------------------------------

# 👨‍💻 About

ForgeUI is a real-time AI-powered frontend engineering workspace
demonstrating full-stack integration, runtime JSX rendering, and
production deployment architecture.
