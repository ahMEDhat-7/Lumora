# Lumora 

This repository contains both the backend (NestJS) and frontend (React) applications for the Lumora project.

---

## Folder Structure

```
apps/
  backend/   # NestJS API server
  frontend/  # React web client
```

---

## 1. Backend Setup (`apps/backend`)

### Description

The backend is a RESTful API built with NestJS and uses MongoDB.

### API Endpoints

The backend provides the following RESTful endpoints:

#### Ideas API

```
GET    /api/ideas          # Get all ideas
POST   /api/ideas          # Create a new idea
GET    /api/ideas/:id      # Get a specific idea by ID
```

---

## 2. Frontend Setup (`apps/frontend`)

### Description

The frontend is a React app bootstrapped with Vite and styled with Tailwind CSS.

### Components

The frontend includes the following main components:

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

### Component Structure
```
src/
  components/
    NavBar.tsx      # Main navigation component
    Form.tsx        # Reusable form component
    Preview.tsx     # Preview component for ideas
  App.tsx          # Main application component
  main.tsx         # Application entry point
```
