import styles from '@/styles/header.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link
        href="/"
        className={`${styles.logo}`}>
        Kostiantyn Sytnyk
      </Link>
      <div className={styles.navMenu}>
        <Link
          href="/about"
          className={`${styles.navElement}`}>
          About
        </Link>
        <Link
          href="/blog"
          className={`${styles.navElement}`}>
          Blog
        </Link>
        <Link
          href="/projects"
          className={`${styles.navElement}`}>
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${styles.navElement}`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
