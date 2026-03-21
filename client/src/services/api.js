// Import de la bibliothèque axios pour faire des requêtes HTTP
import axios from "axios";

// Création d’une instance axios avec une configuration de base
// baseURL permet de ne pas répéter "/api" dans chaque requête
const api = axios.create({
  baseURL: "/api",
});

export const getArtisans = () => api.get("/artisans");
export const getTopArtisans = () => api.get("/artisans/top");
export const getArtisanBySlug = (slug) => api.get(`/artisans/${slug}`);
export const getCategories = () => api.get("/categories");
export const getSpecialties = () => api.get("/specialties");

// Export de l’instance axios pour utilisation avancée si besoin
export default api;
