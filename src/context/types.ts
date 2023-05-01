import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export interface Response {
  results: Array<{
    fsq_id: string;
    categories: Array<{
      id: number;
      name: string;
      icon: {
        prefix: string;
        suffix: string;
      };
    }>;
    chains: Array<unknown>;
    distance: number;
    geocodes: {
      main: {
        latitude: number;
        longitude: number;
      };
      roof: {
        latitude: number;
        longitude: number;
      };
    };
    link: string;
    location: {
      address: string;
      address_extended: string;
      country: string;
      cross_street: string;
      formatted_address: string;
      locality: string;
      post_town: string;
      postcode: string;
      region: string;
    };
  }>;
}

export type ContextTypes = {
  chocolate: Response;
  IsLoadingChocolate: boolean;
  restaurants: Response;
  isLoadingRestaurant: boolean;
  museums: Response;
  isLoadingMuseums: boolean;
  landmarks: Response;
  isLoadingLandmarks: boolean;
  clothingStores: Response;
  isLoadingClothingStores: boolean;
  amusementParks: Response;
  isLoadingAmusementParks: boolean;
};

export const initialState = {
  chocolate: { results: [] },
  IsLoadingChocolate: false,
  restaurants: { results: [] },
  isLoadingRestaurant: false,
  museums: { results: [] },
  isLoadingMuseums: false,
  landmarks: { results: [] },
  isLoadingLandmarks: false,
  clothingStores: { results: [] },
  isLoadingClothingStores: false,
  amusementParks: { results: [] },
  isLoadingAmusementParks: false,
};
