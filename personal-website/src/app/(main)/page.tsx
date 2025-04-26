import Image from 'next/image';
import styles from '@/styles/home.module.css';
import FeaturedBlogCard from '@/components/FeaturedBlogCard';
import SkillCard from '@/components/SkillCard';
import { ProjectCard } from '@/components/ProjectCard';

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

      {/* Featured Blogs Section */}
      <div className={`${styles.featuredBlogsSection} mt-20`}>
        <p className={styles.featuredBlogsLabel}>Featured Blogs</p>
        <div className={styles.featuredBlogsGrid}>
          <FeaturedBlogCard />
          <FeaturedBlogCard />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className={`${styles.featuredProjectsContainer} mt-20`}>
        <p className={`${styles.featuredProjectsTitle}`}>Featured Projects</p>
        <div className={`${styles.featuredProjectsGrid}`}>
          <ProjectCard
            title="ChatGPT History"
            description="Find out how ChatGPT went from 100K users to 300M monthly users. Dive deep into exploration of all product updates, new features, models, tools, new related products with a great timeline. See how old UI looked like and more!"
            imageURL="https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            liveURL="https://yaytext.com/"
          />
          <ProjectCard
            title="Personal Website"
            description="A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and blog articles."
            imageURL="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
            liveURL="https://yourwebsite.com/"
          />
          {/* <ul>
            <li>hello</li>
            <li>my</li>
            <li>friend</li>
            <li>:)</li>
          </ul> */}
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
