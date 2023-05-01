import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { variantDefault } from "../../constants/framerMotion";
import DefineCategory from "../../utils/defineCategory";
import styles from "./styles.module.scss";

declare global {
  interface Window {
    google: any;
  }
}

function Map() {
  const { category } = useParams();
  const { data, isLoading } = DefineCategory(category);
  const mapRef = useRef(null);

  useEffect(() => {
    if (data) {
      const location = { lat: -29.378304829758516, lng: -50.872876631156714 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: location,
      });

      data.results.map((item: any) => {
        //@ts-ignore
        const marker = new window.google.maps.Marker({
          position: { lat: item.geocodes.main.latitude, lng: item.geocodes.main.longitude },
          map: map,
          title: item.name,
        });
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader} />
        </div>
      ) : (
        <motion.div variants={variantDefault} initial="hidden" animate="visible" exit="hidden" className={styles.wrapper}>
          <div ref={mapRef} className={styles.map} />
        </motion.div>
      )}
    </>
  );
}

export default Map;
