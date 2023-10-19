import { motion } from "framer-motion";

import { variantDefault } from "../../constants/framerMotion";
import styles from "./styles.module.scss";

const HomeText = () => {
  return (
    <motion.div className={styles.text} variants={variantDefault} initial="hidden" animate="visible" exit="hidden">
      <span>Visiting Gramado?</span>
      <strong>Check out the nearest tourist attractions for you!</strong>
    </motion.div>
  );
};

export default HomeText;
