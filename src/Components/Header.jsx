import React from "react";
import styles from "../Components/Header.module.css";
import Logo from "../assets/logo.svg?react";

const Header = () => {
  return (
    <nav className={styles.navcontainer}>
      <div className={styles.logocontainer}>
        <Logo /> <a href="#">FishPlace</a>
      </div>
      <ul className={styles.navitemcontainer}>
        <li className={styles.navitems}>
          <a href="">Sobre</a>
        </li>
        <li className={styles.navitems}>
          <a href="">Planos</a>
        </li>
        <li className={styles.navitems}>
          <a href="">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
