//@ts-ignore
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./styles.css";

import { categories } from "../../config/categories";
import { variantDefault } from "../../constants/framerMotion";
import styles from "./styles.module.scss";

const SwiperComponent = () => {
  return (
    <motion.div variants={variantDefault} initial="hidden" animate="visible" exit="hidden" className={styles.wrapper}>
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        {categories.map((item, idx: number) => (
          <SwiperSlide>
            <div className={styles.category}>
              <Link key={idx} to={`/${item.category}`} style={{ textDecoration: "none" }}>
                <div className={styles.content}>
                  <button className={styles.button}>Click Here to Check it out</button>
                  <img className={styles.image} src={item.image} />
                </div>
              </Link>
              <p>{item.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SwiperComponent;
