require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

/**
 * Import des routes API
 */
const artisanRoutes = require("./routes/artisan.routes");
const categoryRoutes = require("./routes/category.routes");
const contactRoutes = require("./routes/contact.routes");

/**
 * Import Sequelize
 */
const { sequelize } = require("./models");

const app = express();

/**
 * Sécurisation des headers HTTP
 */
app.use(helmet());

/**
 * Autorisation des requêtes frontend
 */
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

/**
 * Lecture du JSON envoyé par le frontend
 */
app.use(express.json());

/**
 * Protection anti-spam formulaire contact
 * Maximum 5 requêtes toutes les 15 minutes
 */
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,

  message: {
    message: "Trop de tentatives. Réessayez plus tard.",
  },
});

/**
 * Routes API
 */
app.use("/api/artisans", artisanRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/contact", contactLimiter, contactRoutes);

/**
 * Route principale API
 */
app.get("/", (req, res) => {
  res.json({
    message: "API Trouve ton artisan",
  });
});

/**
 * Gestion routes inexistantes
 */
app.use((req, res) => {
  res.status(404).json({
    message: "Route introuvable",
  });
});

/**
 * Port serveur
 */
const PORT = process.env.PORT || 5000;

/**
 * Connexion base de données
 * puis lancement serveur Express
 */
sequelize
  .authenticate()
  .then(() => {
    console.log("Base de données connectée");

    app.listen(PORT, () => {
      console.log(`Serveur lancé sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur connexion BDD :", error);
  });
