import { motion } from "framer-motion";

import { variantDefault } from "../../constants/framerMotion";
import styles from "./styles.module.scss";

const HomeText = () => {
  return (
    <motion.div className={styles.text} variants={variantDefault} initial="hidden" animate="visible" exit="hidden">
      <span>Visitando Gramado?</span>
      <strong>Encontre os pontos mais próximos de você!</strong>
    </motion.div>
  );
};

export default HomeText;
