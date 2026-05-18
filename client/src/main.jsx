/**
 * Import de React
 */
import React from "react";

/**
 * Import du moteur React DOM
 */
import ReactDOM from "react-dom/client";

/**
 * Import du routeur React
 */
import { BrowserRouter } from "react-router-dom";

/**
 * Import Bootstrap CSS
 */
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Import Bootstrap JS
 */
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/**
 * Import des styles globaux
 */
import "./styles/main.scss";

/**
 * Import du composant principal App
 */
import App from "./App.jsx";

/**
 * Création du root React
 * et rendu de l’application
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  /**
   * Mode strict React
   */
  <React.StrictMode>
    {/*
      Activation React Router
    */}
    <BrowserRouter>
      {/*
        Application principale
      */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
