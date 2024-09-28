import React from "react";
import { createRoot } from "react-dom/client";

// Import Style CSS
import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);
