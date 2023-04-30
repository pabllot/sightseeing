import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import Map from "../../components/Map";
import styles from "./styles.module.scss";

const Content = () => {
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

export default Content;
