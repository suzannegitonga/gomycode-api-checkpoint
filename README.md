# User List App

A simple React application that fetches and displays a list of users from a public API. The app demonstrates React hooks, asynchronous data fetching with `axios`, and responsive UI rendering using a component-based structure.

## 🚀 Features

- Fetches user data from `https://jsonplaceholder.typicode.com/users`
- Displays user cards with:
  - Name
  - Username
  - Email
  - Company name
- Shows a loading indicator while data is being loaded
- Includes error handling for failed API requests
- Built with React, Axios, and CSS

## 📁 Project Structure

- `src/App.js` — Root component that renders the `UserList` component.
- `src/UserList.jsx` — Main component for fetching and displaying users.
- `src/UserList.css` — Styles for the user list and user cards.
- `src/App.css` — Global app styling.
- `src/index.js` — React application entry point.
- `package.json` — Project metadata, dependencies, and scripts.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Install dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

### Run locally

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

## ⚙️ Available Scripts

- `npm start` — Run the app in development mode.
- `npm test` — Launch the test runner.
- `npm run build` — Build the app for production.
- `npm run eject` — Eject Create React App configuration.

## 🧠 How It Works

The `UserList` component uses React hooks:

- `useState` to store users and loading state
- `useEffect` to fetch data when the component mounts

It uses `axios` to request user data from the JSONPlaceholder API and renders a list of user cards once the data is loaded.

## 💡 Notes

- The app currently uses a demo API and is suitable for learning and prototyping.
- If the API request fails, an error message is logged to the browser console.
- The app can be extended with search, filtering, pagination, or detail views.

## 📦 Dependencies

- `react`
- `react-dom`
- `react-scripts`
- `axios`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `web-vitals`

## 📚 Learn More

This app was created with Create React App. For more information on React:

- https://reactjs.org/
- https://create-react-app.dev/

## 📝 License

This project is open source and free to use.
