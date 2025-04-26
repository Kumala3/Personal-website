import Image from 'next/image';
import styles from '@/styles/home.module.css';
import FeaturedBlogCard from '@/components/FeaturedBlogCard';
import SkillCard from '@/components/SkillCard';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className={styles.heroSectionContainer}>
        <div className={styles.leftPanel}>
          <div className={styles.nameHeader}>Kostiantyn Sytnyk</div>
          <div className={styles.shortBio}>
            I am passionate student with over 3 years of experience in
            Full-Stack Development. I specialize in TS (Next.js, React), Python
            (Django, Flask). I am enthusiastic about AI, Game-Dev, workflow
            automations. I am also a content creator at the AIA Advantage Team.
            I am organized, determined and sociable person with a love of
            solving problems and overcoming challenges!
          </div>
        </div>
        <Image
          src="/profile_image_26_4_2025.jpg"
          width={400}
          height={400}
          className={styles.profileImage}
          alt="avatar image"
        />
      </div>

      {/* Featured blogs section */}
      <div className={`${styles.featuredBlogsSection} mt-20`}>
        <p className={styles.featuredBlogsLabel}>Featured Blogs</p>
        <div className={styles.featuredBlogsGrid}>
          <FeaturedBlogCard />
          <FeaturedBlogCard />
        </div>
      </div>

      {/* Skills & Technologies section */}
      <div className={`${styles.skillsTechnologiesSection} mt-20`}>
        <p className={styles.skillsTechnologiesSectionLabel}>
          Skills & Technologies
        </p>
        {/* Skill Cards here */}
        <div className={styles.skillsTechnologiesLayout}>
          <SkillCard
            skillName="Next.js"
            skillDescription="I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app. I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            relatedProjects={[
              { projectTitle: 'SynapseFlow', projectId: 2121 },
              { projectTitle: 'EcoBuddy', projectId: 21 },
            ]}
          />
          <SkillCard
            skillName="Django"
            skillDescription="I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app. I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            relatedProjects={[
              { projectTitle: 'SynapseFlow', projectId: 2121 },
              { projectTitle: 'EcoBuddy', projectId: 21 },
            ]}
          />
          <SkillCard
            skillName="Django"
            skillDescription="I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app. I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            relatedProjects={[
              { projectTitle: 'SynapseFlow', projectId: 2121 },
              { projectTitle: 'EcoBuddy', projectId: 21 },
            ]}
          />
          <SkillCard
            skillName="Django"
            skillDescription="I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app. I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            relatedProjects={[
              { projectTitle: 'SynapseFlow', projectId: 2121 },
              { projectTitle: 'EcoBuddy', projectId: 21 },
            ]}
          />
          <SkillCard
            skillName="Django"
            skillDescription="I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app. I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            relatedProjects={[
              { projectTitle: 'SynapseFlow', projectId: 2121 },
              { projectTitle: 'EcoBuddy', projectId: 21 },
            ]}
          />
          <SkillCard
            skillName="Django"
            skillDescription="I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app. I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            relatedProjects={[
              { projectTitle: 'SynapseFlow', projectId: 2121 },
              { projectTitle: 'EcoBuddy', projectId: 21 },
            ]}
          />
        </div>
      </div>
    </>
  );
}
