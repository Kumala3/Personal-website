import styles from "@/styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.sections}>
                {/* Read & Explore section*/}
                <div className={styles.section}>
                    <div className={styles.sectionLabel}>Read & Explore</div>
                    <div className={styles.elements}>
                        <Link href="/blog" className={styles.singleElement}>Blog</Link>
                        <Link href="/projects" className={styles.singleElement}>Projects</Link>
                    </div>
                </div>
                {/* Contact seection */}
                <div className={styles.section}>
                    <div className={styles.sectionLabel}>Contact</div>
                    <div className={styles.elements}>
                        <Link href="https://www.linkedin.com/in/kostek-sytnyk/" className={styles.singleElement}>Linked</Link>
                        <Link href="https://github.com/Kumala3" className={styles.singleElement}>GitHub</Link>
                    </div>
                </div>
            </div>
            <div className={styles.rightsReserved}>
                © 2025 Kostiantyn Sytnyk | All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;
