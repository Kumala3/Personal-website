import styles from "@/styles/navbar.module.css";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.leftElements}>
                <Link href="/" className={`${styles.leftElement} hover:scale-[1.03] duration-100`}>Kostiantyn Sytnyk Logo</Link>
            </div>
            <div className={styles.rightElements}>
                <Link href="/blog" className={`${styles.rightElement} hover:scale-[1.03] duration-100`}>Blog</Link>
                <Link href="/projects" className={`${styles.rightElement} hover:scale-[1.03] duration-100`}>Projects</Link>
                <Link href="/contact" className={`${styles.rightElement} hover:scale-[1.03] duration-100`}>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;
