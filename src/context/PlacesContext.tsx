import { ReactNode } from "react";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { foursquareAPI } from "../services/foursquareAPI";

type ChildrenProps = {
  children: ReactNode;
};

export const PlacesContext = createContext<any>({});

export const PlacesContextProvider = ({ children }: ChildrenProps) => {
  const { data: chocolate, isLoading: IsLoadingChocolate } = useQuery({
    queryKey: ["chocolate"],
    queryFn: async () => {
      const res = await foursquareAPI.get("/places/search?ll=-29.3788,-50.8766&categories=17062&limit=50&radius=10000");
      return res.data;
    },
  });

  const { data: restaurants, isLoading: isLoadingRestaurant } = useQuery({
    queryKey: ["restaurants"],
    queryFn: async () => {
      const res = await foursquareAPI.get("/places/search?ll=-29.3788,-50.8766&categories=13065&limit=50&radius=10000");
      return res.data;
    },
  });

  const { data: landmarks, isLoading: isLoadingLandmarks } = useQuery({
    queryKey: ["landmarks"],
    queryFn: async () => {
      const res = await foursquareAPI.get("/places/search?ll=-29.3788,-50.8766&categories=16000&limit=50&radius=10000");
      return res.data;
    },
  });

  const { data: museums, isLoading: isLoadingMuseums } = useQuery({
    queryKey: ["museums"],
    queryFn: async () => {
      const res = await foursquareAPI.get("/places/search?ll=-29.3788,-50.8766&categories=10028&limit=50&radius=10000");
      return res.data;
    },
  });

  const { data: clothingStores, isLoading: isLoadingClothingStores } = useQuery({
    queryKey: ["clothingStores"],
    queryFn: async () => {
      const res = await foursquareAPI.get("/places/search?ll=-29.3788,-50.8766&categories=17043&limit=50&radius=10000");
      return res.data;
    },
  });

  const { data: amusementParks, isLoading: isLoadingAmusementParks } = useQuery({
    queryKey: ["amusementParks"],
    queryFn: async () => {
      const res = await foursquareAPI.get("/places/search?ll=-29.3788,-50.8766&categories=10001&limit=50&radius=10000");
      return res.data;
    },
  });

  return (
    <PlacesContext.Provider
      value={{
        chocolate,
        IsLoadingChocolate,
        restaurants,
        isLoadingRestaurant,
        museums,
        isLoadingMuseums,
        landmarks,
        isLoadingLandmarks,
        clothingStores,
        isLoadingClothingStores,
        amusementParks,
        isLoadingAmusementParks,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
