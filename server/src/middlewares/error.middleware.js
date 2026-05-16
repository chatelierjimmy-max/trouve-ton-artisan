/**
 * Middleware global de gestion des erreurs
 */
const errorMiddleware = (error, req, res, next) => {
  console.error(error);

  return res.status(500).json({
    message: "Erreur interne du serveur",
  });
};

module.exports = errorMiddleware;
