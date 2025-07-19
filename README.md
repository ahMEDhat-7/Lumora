# Lumora 

Lumora is a comprehensive web application consisting of a React frontend and NestJS backend for managing ideas and content.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [Available Commands](#available-commands)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## Overview

Lumora is a modern web application that allows users to create and manage ideas and content interactively. It consists of:

- **Backend**: RESTful API built with NestJS and MongoDB database
- **Frontend**: Interactive React application with Tailwind CSS for styling

## Prerequisites

Before starting, make sure you have installed:

- **Node.js** (version 18 or later)
- **npm** or **yarn**
- **MongoDB** (local or cloud)

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

## 📁 Project Structure

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

## 🔧 Backend

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

### Usage Examples

```bash
# Get all ideas
curl http://localhost:3000/api/ideas

# Create a new idea
curl -X POST http://localhost:3000/api/ideas \
  -H "Content-Type: application/json" \
  -d '{"idea": "New idea content"}'

# Get a specific idea
curl http://localhost:3000/api/ideas/64f1a2b3c4d5e6f7g8h9i0j1
```

---

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

---

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

### Backend Commands

```bash
cd apps/backend

# Run in development mode
npm run start:dev

# Run in production mode
npm run start:prod

# Build the project
npm run build

# Run tests
npm run test

# Run ESLint
npm run lint
```

### Frontend Commands

```bash
cd apps/frontend

# Run in development mode
npm run dev

# Build the project
npm run build

# Preview the build
npm run preview

# Run ESLint
npm run lint
```

---

## Development

### Development Environment Setup

1. **Run Backend**:
   ```bash
   cd apps/backend
   npm run start:dev
   ```

2. **Run Frontend**:
   ```bash
   cd apps/frontend
   npm run dev
   ```

3. **Access the Application**:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

### Data Structure

#### Idea Entity Model

```typescript
interface Idea {
  _id: string;
  idea: string;
  sections: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Adding New Features

1. **Add New Backend Endpoint**:
   - Create new Controller in `apps/backend/src/`
   - Add Service for database operations
   - Update main Module

2. **Add New Frontend Component**:
   - Create React component in `apps/frontend/src/components/`
   - Add route in `App.tsx`
   - Update NavBar if needed

---

## Deployment

### Building for Production

```bash
# Build entire project
npm run build

# Run built project
npm start
```

### Environment Variables

Create `.env` file in `apps/backend/` directory:

```env
# Database settings
MONGODB_URI=mongodb://localhost:27017/lumora

# Server settings
PORT=3000
NODE_ENV=production
```

### Traditional Hosting

You can deploy this application to any traditional hosting platform:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Upload files** to your hosting provider

3. **Set environment variables** for production

4. **Start the application**:
   ```bash
   npm start
   ```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---
