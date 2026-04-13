# Dashboard App

A modern React dashboard built with Vite and Tailwind CSS.

## Tech Stack
- React
- Vite
- Tailwind CSS
- React Router DOM
- Recharts
- Lucide React

## Project Structure
- `components/` reusable UI parts
- `pages/` page-level screens
- `layout/` sidebar, navbar, main layout
- `services/` API logic
- `hooks/` custom hooks
- `utils/` helpers

## Project Layout

```
main.jsx
  ↓
App.jsx
  ↓
MainLayout.jsx
  ├── Sidebar.jsx
  ├── Navbar.jsx
  └── Routes
       ├── Dashboard.jsx
       │    ├── StatCard.jsx
       │    ├── DataTable.jsx
       │    └── BarChartComponent.jsx
       ├── Users.jsx
       └── Settings.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```