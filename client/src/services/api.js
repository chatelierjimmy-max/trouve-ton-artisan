import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getArtisans = () => api.get("/artisans");
export const getTopArtisans = () => api.get("/artisans/top");
export const getArtisanBySlug = (slug) => api.get(`/artisans/${slug}`);
export const getCategories = () => api.get("/categories");
export const getSpecialties = () => api.get("/specialties");

export default api;
