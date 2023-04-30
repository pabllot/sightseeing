import SwiperComponent from "../../components/Swiper";
import HomeText from "../../components/HomeText";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeText />
      <SwiperComponent />
    </div>
  );
};

export default Home;
