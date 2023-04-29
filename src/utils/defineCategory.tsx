import { usePlaces } from "../hooks/usePlaces";

const DefineCategory = (param: string) => {
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

  if (param === "category1") return { data: chocolate, isLoading: IsLoadingChocolate };
  if (param === "category2") return { data: restaurants, isLoading: isLoadingRestaurant };
  if (param === "category3") return { data: museums, isLoading: isLoadingMuseums };
  if (param === "category4") return { data: landmarks, isLoading: isLoadingLandmarks };
  if (param === "category5") return { data: clothingStores, isLoading: isLoadingClothingStores };
  if (param === "category6") return { data: amusementParks, isLoading: isLoadingAmusementParks };
};

export default DefineCategory;
