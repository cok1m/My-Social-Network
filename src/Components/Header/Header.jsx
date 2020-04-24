import React from 'react';
import styles from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, logout, login}) => {
  return (
    <header className={styles.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png" alt="background"/>
      <h1 className={styles.mainTitle}>Friends</h1>
      <div className={styles.loginBlock}>
        { isAuth
        ? <div>
            <p className={styles.loginName}>Login: {login}</p>
            <button onClick={logout}>Logout</button>
          </div>
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;