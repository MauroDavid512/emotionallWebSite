"use client";

import styles from './NavBar.module.css'
import { useState, useEffect } from 'react';

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Cambia el valor para ajustar cuándo cambia el color
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.leftSide}>
        <img src="/images/emotionall-logo.png" alt="" />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.section}>
          Home
        </div>
        <div className={styles.section}>
          Blog
        </div>
        <div className={styles.section}>
          About
        </div>
        <div className={styles.section}>
          Contact
        </div>
      </div>
    </div>
  );
}
