import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesApp";

// Import Style CSS
import './style/style.css';


const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);
