import { Link } from "react-router-dom";
import { categories } from "../../config/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar";
import landscape from "../../assets/chocolate.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div>Oi</div>
        <div className={styles.wrapper}>
          <Swiper modules={[Navigation, Pagination]} navigation pagination>
            {categories.map((category: any, idx: number) => (
              <SwiperSlide>
                <div className={styles.category}>
                  <Link key={idx} to={`/${category}`} style={{ textDecoration: "none" }}>
                    <img className={styles.image} src={landscape} />
                  </Link>
                  <p>{category}</p>
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
