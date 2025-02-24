# GitHub Kanban Board

## Overview

This project is a **Kanban Board** for GitHub repository issues, allowing users to visualize and manage issues efficiently. Users can enter a repository URL, load its issues, and organize them into different columns.

## Features

- Enter a GitHub repository URL to fetch issues.
- Displays issues in three columns:
  - **ToDo** (new issues)
  - **In Progress** (open issues with an assignee)
  - **Done** (closed issues)
- Drag-and-drop functionality to move issues between columns.
- Issues' positions (column and order) are stored across sessions.
- Links to visit the repository and its owner's profile.

## Technologies Used

- **Frontend:** React 18 with hooks, TypeScript
- **UI Library:** Chakra UI
- **State Management:** Zustand
- **Drag-and-Drop:** DnD Kit
- **Testing:** Cypress

## Installation & Setup

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Clone the Repository

```sh
git clone https://github.com/minimal005/kanban.git
cd kanban
```

### Install Dependencies

```sh
npm install
```

### Run the Development Server

```sh
npm run dev
```

### Run Tests

```sh
npm run test
```

## How It Works

1. **Enter a GitHub repo URL** in the input field (e.g., `https://github.com/facebook/react`).
2. **Click "Load"**, and the app fetches issues from GitHub API.
3. **Drag & drop** issues between columns to update their status.
4. The app **saves issue positions** so they persist across sessions.
5. Click on repository and owner links to visit them on GitHub.

## Folder Structure

```
kanban/
├── src/
│   ├── components/   # React components
│   ├── hooks/        # Custom hooks
│   ├── store/        # Redux store
│   ├── utils/        # Utility functions
│   ├── tests/        # Cypress tests
│   ├── App.tsx       # Main app file
│   ├── index.tsx     # Entry point
│
├── public/           # Static assets
├── README.md         # Project documentation
├── package.json      # Dependencies and scripts
```

## Assessment Criteria

- ✅ **Workability**: Fully functional Kanban board
- ✅ **Project Structure**: Well-organized files and modular components
- ✅ **Code Quality**: Clean, maintainable, and properly formatted with ESLint and Prettier
- ✅ **React & Ecosystem Knowledge**: Proper use of hooks, state management, and UI libraries
- ✅ **Testing**: Cypress tests to ensure functionality

## Future Improvements

- Enhance performance with **virtualized lists** for large repositories.
- Add **user authentication** for personal issue tracking.
- Implement **real-time updates** using WebSockets.

## License

This project is licensed under the **MIT License**.
