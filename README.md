# Lumora - someone who inspires

Lumora is a comprehensive web application consisting of a React frontend and NestJS backend for managing ideas and content.

## Table of Contents

- [Overview](#overview)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [Available Commands](#available-commands)
- [Contributing](#contributing)

---

## Overview

Lumora is a modern web application that allows users to create and manage ideas and content interactively. It consists of:

- **Backend**: RESTful API built with NestJS and MongoDB database
- **Frontend**: Interactive React application with Tailwind CSS for styling

## Installation & Setup

### 1. Clone the Project

```bash
git clone git@github.com:ahMEDhat-7/Lumora.git
cd Lumora
```

### 2. Install Dependencies

```bash
# Install main project dependencies
npm install

# Install backend dependencies
cd apps/backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Database Setup

Make sure MongoDB is running or set up your database connection in the configuration files.

### 4. Run the Project

```bash
# Return to main directory
cd ../..

# Run the project in development mode
npm run dev
```

---

## Project Structure

```
Lumora/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── idea/
│   │   │   │   ├── dto/
│   │   │   │   ├── entities/  
│   │   │   │   ├── idea.controller.ts
│   │   │   │   ├── idea.service.ts
│   │   │   │   └── idea.module.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.service.ts
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   │   ├── NavBar.tsx
│       │   │   ├── Form.tsx
│       │   │   ├── Preview.tsx
│       │   │   ├── IdeaPreviewPage.tsx
│       │   │   └── WebPreview.tsx
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css
│       ├── package.json
│       └── vite.config.ts
├── package.json
└── README.md
```

---

## Backend

### Technologies Used

- **NestJS**: Node.js framework for building scalable applications
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **TypeScript**: Primary programming language

### API Endpoints

#### Ideas

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/ideas` | Get all ideas |
| `POST` | `/api/ideas` | Create a new idea |
| `GET` | `/api/ideas/:id` | Get a specific idea by ID |


## Frontend

### Technologies Used

- **React**: UI library
- **Vite**: Fast build tool
- **Tailwind CSS**: CSS framework
- **React Router**: Navigation management
- **TypeScript**: Primary programming language

### Main Components

#### NavBar (`src/components/NavBar.tsx`)
- Main navigation bar component
- Handles routing and navigation state
- Contains app branding and navigation links

#### Form (`src/components/Form.tsx`)
- Reusable form component for idea creation/editing
- Handles form validation and submission
- Supports both create and update operations

#### Preview (`src/components/Preview.tsx`)
- Displays a preview of the idea content
- Real-time preview as users type in the form
- Supports markdown rendering

#### IdeaPreviewPage (`src/components/IdeaPreviewPage.tsx`)
- Full idea display page
- Shows idea details with sections

#### WebPreview (`src/components/WebPreview.tsx`)
- Interactive web preview
- Displays content in web format

### Available Pages

- **Home Page** (`/`): Idea creation form
- **Ideas Page** (`/ideas`): Display all ideas
- **Idea Preview** (`/ideas/:id/preview`): Display specific idea

## Available Commands

### Main Project Commands

```bash
# Run project in development mode
npm run dev

# Build project for production
npm run build

# Run built project
npm start
```

## Docker

You can build and run the entire application using Docker. Make sure you have Docker installed.

### Build the Docker image

```bash
docker build -t lumora-app .
```

### Run the Docker container

```bash
docker run -p 3000:3000 lumora-app
```

The backend server will be available at `http://localhost:3000`.

> **Note:**
> - Ensure your MongoDB instance is accessible to the container. You may want to use Docker Compose for a full stack (API + DB) setup.
> - You can set environment variables (e.g., database connection) using the `-e` flag or a `.env` file.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
---