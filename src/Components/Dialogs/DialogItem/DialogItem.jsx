import React from 'react'
import styles from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  return (
    <div className={styles.dialog}>
      <img alt="dialogIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrj-Sno6VD9uBaS36QliujX25lT8sshmvCyNEcxI35tPGcoWuw&usqp=CAU"/>
      <NavLink activeClassName={styles.active} to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem