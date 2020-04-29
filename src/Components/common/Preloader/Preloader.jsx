import React from "react";
import preloader from "../../../assets/preloader.gif";
import styles from "./Preloader.module.sass";

let Preloader = (props) => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
