import styles from '@/styles/footer.module.css';
import { FooterNavElem } from '@/components/FooterNavElem';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        {/* Read & Explore Section */}
        <div className={styles.sectionContainer}>
          <p className={styles.sectionLabel}>Read & Explore</p>
          <div className={styles.navElements}>
            <FooterNavElem text="Blog" href="/blog" />
            <FooterNavElem text="Projects" href="/projects" />
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.sectionContainer}>
          <p className={styles.sectionLabel}>Contact</p>
          <div className={styles.navElements}>
            <FooterNavElem text="About" href="/about" />
            <FooterNavElem text="Contact" href="/contact" />
          </div>
        </div>
      </div>

      <p className={styles.rightsReserved}>
        © 2025 Kostiantyn Sytnyk | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
