import React from 'react';
import styles from'./Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png" alt="background"/>
      <h1>Friends</h1>
    </header>
  )
}

export default Header;