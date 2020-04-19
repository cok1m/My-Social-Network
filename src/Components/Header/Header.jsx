import React from 'react';
import styles from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png" alt="background"/>
      <h1>Friends</h1>
      <div className={styles.loginBlock}>
        { props.isAuth
        ? <p>{props.login}</p> 
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;