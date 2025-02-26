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
- **State Management:** Redux toolkit
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
