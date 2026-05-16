require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const artisanRoutes = require("./routes/artisan.routes");
const categoryRoutes = require("./routes/category.routes");

const { sequelize } = require("./models");

const app = express();

/**
 * Sécurité HTTP
 */
app.use(helmet());

/**
 * Autorisation CORS
 */
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

/**
 * Lecture JSON
 */
app.use(express.json());

/**
 * Routes API
 */
app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categoryRoutes);

/**
 * Route de test
 */
app.get("/", (req, res) => {
  res.json({
    message: "API Trouve ton artisan",
  });
});

/**
 * Gestion route inexistante
 */
app.use((req, res) => {
  res.status(404).json({
    message: "Route introuvable",
  });
});

const PORT = process.env.PORT || 5000;

/**
 * Connexion BDD + lancement serveur
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
