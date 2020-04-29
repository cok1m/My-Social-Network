import React from "react";
import styles from "./DialogItem.module.sass";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
  return (
    <div className={styles.dialog}>
      <img
        alt="dialogIcon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrj-Sno6VD9uBaS36QliujX25lT8sshmvCyNEcxI35tPGcoWuw&usqp=CAU"
      />
      <NavLink activeClassName={styles.active} to={"/dialogs/" + id}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
