// Import des dépendances
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
// Import des routes
const contactRoutes = require("./routes/contactRoutes");
const artisanRoutes = require("./routes/artisanRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const specialtyRoutes = require("./routes/specialtyRoutes");

// Debug (optionnel : vérifier que les routes sont bien importées)
console.log("artisanRoutes =", typeof artisanRoutes);
console.log("categoryRoutes =", typeof categoryRoutes);
console.log("specialtyRoutes =", typeof specialtyRoutes);

// Création de l’application Express
const app = express();

// SÉCURITÉ

// Ajoute des protections HTTP (headers sécurisés)
app.use(helmet());

// Autorise les requêtes depuis ton frontend React
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

// MIDDLEWARES

// Permet de lire les données JSON envoyées par le frontend
app.use(express.json());

// Limiteur de requêtes (anti-spam / sécurité)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Application du limiter à toutes les routes
app.use(limiter);

// ROUTE TEST

// Permet de vérifier que l’API fonctionne
app.get("/api/health", (req, res) => {
  res.json({ message: "API OK" });
});

// ROUTES API

// Routes catégories
app.use("/api/categories", categoryRoutes);
// Routes spécialités
app.use("/api/specialties", specialtyRoutes);
// Routes artisans
app.use("/api/artisans", artisanRoutes);
// Route contact (formulaire)
app.use("/api/contact", contactRoutes);

// Export de l’application
module.exports = app;
