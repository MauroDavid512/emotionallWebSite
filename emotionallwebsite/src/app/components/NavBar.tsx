"use client";

import styles from './NavBar.module.css'
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToAbout = () => {
    router.push("/about");
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.leftSide}>
        <img src="/images/emotionall-logo.png" alt="" onClick={goToHome} style={{cursor: 'pointer'}}/>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.section} onClick={goToHome}>
          Home
        </div>
        <div className={styles.section}>
          Blog
        </div>
        <div className={styles.section} onClick={goToAbout}>
          About
        </div>
        <div className={styles.section} onClick={() => {
          if(pathname !== '/'){
            goToHome()
            setTimeout(() => scrollToSection('contact'), 500)
          }else{
            scrollToSection('contact')
          }
          }}>
          Contact
        </div>
      </div>
    </div>
  );
}
