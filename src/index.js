import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get the root DOM node
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render App component
root.render(<App />);
