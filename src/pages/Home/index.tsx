import { Link } from "react-router-dom";
import { categories } from "../../config/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Visitando Gramado?</span>
        <strong>Encontre os pontos mais próximos de você!</strong>
      </div>
      <div className={styles.wrapper}>
        <Swiper modules={[Navigation, Pagination]} navigation pagination>
          {categories.map((item: any, idx: number) => (
            <SwiperSlide>
              <div className={styles.category}>
                <Link key={idx} to={`/${item.category}`} style={{ textDecoration: "none" }}>
                  <img className={styles.image} src={item.image} />
                </Link>
                <p>{item.category}</p>
              </div>
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
