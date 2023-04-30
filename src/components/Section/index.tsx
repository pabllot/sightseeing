import { Link } from "react-router-dom";
import Map from "../Map";
import styles from "./styles.module.scss";
import { BiArrowBack } from "react-icons/bi";

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Encontre o ponto mais próximo de você.</div>
      <Map />
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={styles.button}>
          <BiArrowBack />
        </div>
      </Link>
    </div>
  );
};

export default Section;
