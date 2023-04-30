import { Link } from "react-router-dom";
import { categories } from "../../config/categories";

const Home = () => {
  return (
    <div>
      {categories.map((category: any, idx: number) => (
        <Link key={idx} to={`/${category}`} style={{ textDecoration: "none" }}>
          <div style={{ marginBottom: "2rem" }}>{category}</div>
        </Link>
      ))}{" "}
    </div>
  );
};

export default Home;
