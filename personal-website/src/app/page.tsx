import Image from "next/image";
import styles from "@/styles/home.module.css"
import FeaturedBlogCard from "@/components/FeaturedBlogCard";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className={styles.heroSection}>
        <div className={styles.essentialInfo}>
          <div className={styles.headline}>Kostiantyn Sytnyk</div>      
          <div className={styles.shortBio}>
            I am passionate student with over 3 years of experience in Full-Stack Development. I specialize in TS (Next.js, React), Python (Django, Flask). I am enthusiastic about AI, Game-Dev, workflow automations. 
            I am also a content creator at the AIA Advantage Team. I am organized, determined and sociable person with a love of solving problems and overcoming challenges!  
          </div>  
        </div>
        <Image src="/avatar-image.png" width={400} height={400} className={styles.image} alt="avatar image" />
      </div>

      {/* Featured blogs section */}
      <div className="py-10">
        <FeaturedBlogCard />
      </div>
    </div>
  );
}
