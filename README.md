# Logger – Accountability Tracker (Frontend)

Frontend repository for **Logger**, a full-stack accountability tracker that helps users stay on track with personal or group goals — from workouts to cooking at home. 
This repo contains the **React + Vite** frontend code.

## Table of Contents
- [Logger – Accountability Tracker (Frontend)](#logger--accountability-tracker-frontend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Team](#team)
  - [Features](#features)
    - [MVP](#mvp)
  - [Frontend Setup](#frontend-setup)
    - [1. Clone the repository](#1-clone-the-repository)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Enable linting and formatting](#3-enable-linting-and-formatting)
    - [4. Create a `.env` file](#4-create-a-env-file)
    - [5. Run the development server](#5-run-the-development-server)
  - [Environment Variables](#environment-variables)
  - [Notes](#notes)

---

## Overview
Logger enables users to:
- Track activities individually or in groups.
- Get matched with accountability partners based on shared interests.
- Send and receive text notifications for check-ins.
- Keep logs of daily progress.

The frontend is built with **React** (Vite) and styled using Material UI. It communicates with the backend API (Java Spring Boot) via REST calls.

---

## Tech Stack

**Frontend:**
- React (Vite)
- Material UI
- React Router (HashRouter)
- React Context API
- Testing Library

**Backend (for reference):**
- Java 17
- Spring Boot
- Hibernate JPA
- PostgreSQL

**Other Tools:**
- Textbelt API (SMS notifications)
- Figma (design)
- ESLint + Prettier (linting & formatting)

---

## Team
- **Solhee Jin**
- **Sno Ochoa**
- **Laura Castro**

---

## Features

### MVP
- Static user authentication (signup, login).
- Profile creation with username, password, profile picture, and interests.
- Add friends via username.
- Create groups or join groups.
- Create logs for a specific topic.
- Find an accountability partner.
- Send text reminders to friends who haven't checkedin.

---

## Frontend Setup

### 1. Clone the repository
```bash
git clone <frontend-repo-url>
cd tracker-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Enable linting and formatting
Install these VS Code extensions:
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Create `.vscode/settings.json` in the project root (not inside `src/`):
```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": ["javascript", "javascriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
> Note: You may see a yellow type warning for the last two lines; this can be safely ignored.

### 4. Create a `.env` file
Inside the `tracker-frontend` folder:
```
VITE_BACKEND_URL=http://localhost:8080
# Or for deployed backend:
# VITE_BACKEND_URL=https://your-backend-url.com
```

### 5. Run the development server
```bash
npm run dev
```

---

## Environment Variables

**Frontend (`.env`):**
```
VITE_BACKEND_URL=http://localhost:8080
```

---

## Notes
- **CORS**: Requests to the backend must come from:
  - `http://localhost:5173` (default Vite port), or
  - The deployed frontend (`ellenjin.github.io/tracker-frontend`).
- The app is configured to use the deployed database by default — local DB setup is optional.
- For backend setup instructions, refer to the [`tracker-backend` repository](<backend-repo-url>).
