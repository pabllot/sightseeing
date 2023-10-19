import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import Map from "../../components/Map";
import styles from "./styles.module.scss";

const Content = () => {
  const { category } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.text}>Find the {category} closest to you.</div>
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
