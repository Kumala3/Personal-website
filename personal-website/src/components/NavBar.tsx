import styles from "@/styles/navbar.module.css";

const NavBar = () => {
    const onLogoClick = () => {
        // add code here
    }

    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <div className={styles.Logo}>Kostiantyn Sytnyk Logo</div>
            </div>
            <div className={styles.rightElements}>
                <div className={styles.blogElement}>
                    <div className={styles.blog}>Blog</div>
                </div>
                <div className={styles.blogElement}>
                    <div className={styles.blog}>Projects</div>
                </div>
                <div className={styles.blogElement}>
                    <div className={styles.blog}>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
