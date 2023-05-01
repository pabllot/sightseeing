import { foursquareAPI } from "../services/foursquareAPI";

export const getCategoryData = async (categoryId: string) => {
  const res = await foursquareAPI.get(`/places/search?ll=-29.3788,-50.8766&categories=${categoryId}&limit=50&radius=10000`);
  return res.data;
};
