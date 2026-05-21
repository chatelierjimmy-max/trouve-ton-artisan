require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const artisanRoutes = require("./routes/artisan.routes");
const categoryRoutes = require("./routes/category.routes");
const contactRoutes = require("./routes/contact.routes");

const errorMiddleware = require("./middlewares/error.middleware");

const { sequelize } = require("./models");

const app = express();

app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  "https://trouve-ton-artisan-sepia.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origine non autorisée par CORS"));
    },
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "10kb",
  }),
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Trop de tentatives. Réessayez plus tard.",
  },
});

app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/contact", contactLimiter, contactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API Trouve ton artisan",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route introuvable",
  });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

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
