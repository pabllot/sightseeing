import chocolate from "../assets/chocolate.jpg";
import parques from "../assets/parques.jpg";
import restaurantes from "../assets/restaurantes.jpg";
import museus from "../assets/museus.jpeg";
import lojas from "../assets/lojas.jpg";
import landmark from "../assets/turismo.jpg";

type Category = {
  category: string;
  image: string;
};

export const categories: Category[] = [
  { category: "Landmarks", image: landmark },
  { category: "Parques", image: parques },
  { category: "Restaurantes", image: restaurantes },
  { category: "Museus", image: museus },
  { category: "Chocolates", image: chocolate },
  { category: "Lojas", image: lojas },
];
