import { usePlaces } from "../hooks/usePlaces";

const DefineCategory = (param: any) => {
  const {
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
  } = usePlaces();

  if (param === "Chocolates") return { data: chocolate, isLoading: IsLoadingChocolate };
  if (param === "Restaurantes") return { data: restaurants, isLoading: isLoadingRestaurant };
  if (param === "Museus") return { data: museums, isLoading: isLoadingMuseums };
  if (param === "Landmarks") return { data: landmarks, isLoading: isLoadingLandmarks };
  if (param === "Lojas") return { data: clothingStores, isLoading: isLoadingClothingStores };
  if (param === "Parques") return { data: amusementParks, isLoading: isLoadingAmusementParks };
};

export default DefineCategory;
