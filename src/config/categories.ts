import chocolate from "../assets/chocolate.webp";
import parques from "../assets/parques.webp";
import restaurantes from "../assets/restaurantes.webp";
import museus from "../assets/museus.webp";
import lojas from "../assets/lojas.webp";
import landmark from "../assets/turismo.webp";

type Category = {
  category: string;
  image: string;
};

export const categories: Category[] = [
  { category: "Landmarks", image: landmark },
  { category: "Parks", image: parques },
  { category: "Restaurants", image: restaurantes },
  { category: "Museums", image: museus },
  { category: "Chocolate", image: chocolate },
  { category: "Stores", image: lojas },
];
