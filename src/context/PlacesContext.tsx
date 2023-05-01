import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { getCategoryData } from "../utils/getCategoryData";
import { ChildrenProps, ContextTypes, initialState } from "./types";

export const PlacesContext = createContext<ContextTypes>(initialState);

export const PlacesContextProvider = ({ children }: ChildrenProps) => {
  const { data: chocolate, isLoading: isLoadingChocolate } = useQuery({
    queryKey: ["chocolate"],
    queryFn: () => getCategoryData("17062"),
  });

  const { data: restaurants, isLoading: isLoadingRestaurant } = useQuery({
    queryKey: ["restaurants"],
    queryFn: () => getCategoryData("13065"),
  });

  const { data: landmarks, isLoading: isLoadingLandmarks } = useQuery({
    queryKey: ["landmarks"],
    queryFn: () => getCategoryData("16000"),
  });

  const { data: museums, isLoading: isLoadingMuseums } = useQuery({
    queryKey: ["museums"],
    queryFn: () => getCategoryData("10028"),
  });

  const { data: clothingStores, isLoading: isLoadingClothingStores } = useQuery({
    queryKey: ["clothingStores"],
    queryFn: () => getCategoryData("17043"),
  });

  const { data: amusementParks, isLoading: isLoadingAmusementParks } = useQuery({
    queryKey: ["amusementParks"],
    queryFn: () => getCategoryData("10001"),
  });

  return (
    <PlacesContext.Provider
      value={{
        chocolate,
        isLoadingChocolate,
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
