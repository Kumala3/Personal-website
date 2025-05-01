'use client';

import styles from '@/styles/header.module.css';
import Link from 'next/link';
import MenuIcon from '@/components/ui/icons/MenuIcon';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import { useState } from 'react';
import MobileNavElem from "@/components/MobileNavElem";

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleMenuOpen = () => {
    if (!isMenuOpened) {
      setIsMenuOpened(true);
    }
    console.log('MenuModal opened!');
  };

  const handleMenuClose = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false);
    }
    console.log('MenuModal closed!');
  };

  return (
    <div className={styles.navBar}>
      <Link href="/" className={`${styles.logo}`}>
        Kostiantyn Sytnyk
      </Link>
      {!isMenuOpened && (
        <button onClick={handleMenuOpen} aria-label="Open Menu">
          <MenuIcon width={72} height={72} className={`${styles.menuIcon}`} />
        </button>
      )}
      {isMenuOpened && (
        <div className={`${styles.menuModalContainer}`}>
          <button onClick={handleMenuClose} aria-label="Close Menu">
            <CloseIcon className={`${styles.closeIcon}`} />
          </button>

          {/* Mobile navigation links */}
          <div className={`${styles.mobileNavMenu}`}>
            <MobileNavElem onClick={handleMenuClose} text="Home" href="/" className={`${styles.mobileNavElem}`}/>
            <MobileNavElem onClick={handleMenuClose} text="About" href="about" className={`${styles.mobileNavElem}`}/>
            <MobileNavElem onClick={handleMenuClose} text="Projects" href="projects" className={`${styles.mobileNavElem}`}/>
            <MobileNavElem onClick={handleMenuClose} text="Blog" href="blog" className={`${styles.mobileNavElem}`}/>
            <MobileNavElem onClick={handleMenuClose} text="Contact" href="contact" className={`${styles.mobileNavElem}`}/>
          </div>
        </div>
      )}
      <div className={styles.navMenu}>
        <Link href="/about" className={`${styles.navElement}`}>
          About
        </Link>
        <Link href="/blog" className={`${styles.navElement}`}>
          Blog
        </Link>
        <Link href="/projects" className={`${styles.navElement}`}>
          Projects
        </Link>
        <Link href="/contact" className={`${styles.navElement}`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
