// Import de React (nécessaire pour JSX)
import React from "react";
// Import de ReactDOM pour rendre l’application dans le DOM
import ReactDOM from "react-dom/client";
// BrowserRouter permet de gérer la navigation (routes)
import { BrowserRouter } from "react-router-dom";
// Import du composant principal
import App from "./App.jsx";
// Import des styles Bootstrap (UI rapide)
import "bootstrap/dist/css/bootstrap.min.css";
// Import des icônes Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
// Import de tes styles personnalisés (SCSS)
import "./styles/main.scss";

// Création de la racine React et rendu de l’application
ReactDOM.createRoot(document.getElementById("root")).render(
  
  // StrictMode aide à détecter les problèmes dans le code (développement)
  <React.StrictMode>
    {/* Active le système de routing dans toute l’application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
