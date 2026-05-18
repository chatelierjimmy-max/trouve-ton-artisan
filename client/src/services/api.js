/**
 * Import de la librairie Axios
 * permettant les requêtes HTTP
 */
import axios from "axios";

/**
 * Création de l’instance Axios
 * utilisée dans toute l’application
 */
const api = axios.create({
  /**
   * URL de base de l’API backend
   */
  baseURL: "http://localhost:5000/api",
});

/**
 * Export de l’instance API
 */
export default api;
