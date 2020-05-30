import React from "react";
import preloader from "../../../assets/preloader.gif";
import styles from "./Preloader.module.sass";

export default () => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="" />
    </div>
  );
};
