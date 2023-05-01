//@ts-ignore
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./styles.css";

import { categories } from "../../config/categories";
import styles from "./styles.module.scss";

const SwiperComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        {categories.map((item, idx: number) => (
          <SwiperSlide>
            <div className={styles.category}>
              <Link key={idx} to={`/${item.category}`} style={{ textDecoration: "none" }}>
                <img className={styles.image} src={item.image} />
              </Link>
              <p>{item.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
