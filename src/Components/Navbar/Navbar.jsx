import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav className={styles.nav}>
        <NavLink className={styles.item} activeClassName={styles.activeLink} to="/profile">Profile</NavLink>
        <NavLink className={styles.item} activeClassName={styles.activeLink} to="/dialogs">Messages</NavLink>
        <NavLink className={styles.item} activeClassName={styles.activeLink} to="/news">News</NavLink>
        <NavLink className={styles.item} activeClassName={styles.activeLink} to='/music'>Music</NavLink>
        <NavLink className={styles.item} activeClassName={styles.activeLink} to='settings'>Settings</NavLink>
    </nav>
  )
}

export default Navbar;