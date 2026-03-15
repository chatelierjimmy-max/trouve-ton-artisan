const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./routes/contactRoutes");
const artisanRoutes = require("./routes/artisanRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const specialtyRoutes = require("./routes/specialtyRoutes");

console.log("artisanRoutes =", typeof artisanRoutes);
console.log("categoryRoutes =", typeof categoryRoutes);
console.log("specialtyRoutes =", typeof specialtyRoutes);

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.get("/api/health", (req, res) => {
  res.json({ message: "API OK" });
});

app.use("/api/categories", categoryRoutes);
app.use("/api/specialties", specialtyRoutes);
app.use("/api/artisans", artisanRoutes);
app.use("/api/contact", contactRoutes);

module.exports = app;
