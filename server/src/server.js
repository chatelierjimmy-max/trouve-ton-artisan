// Charge les variables d’environnement depuis le fichier .env
require("dotenv").config();
// Import de l’application Express configurée
const app = require("./app");
// Définition du port (priorité au .env, sinon 3000)
const PORT = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
