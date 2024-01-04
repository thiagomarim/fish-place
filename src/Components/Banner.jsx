import React from "react";
import styles from "../Components/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bg}>
      <h3 className={styles.bannertitle}>O melhor lugar para ver a beleza da natureza.</h3>
      <div className={styles.containerbtn}>
        <a href="#" className={styles.btn}>Assine o nosso pacote</a>
      </div>
    </div>
  );
};

export default Banner;
