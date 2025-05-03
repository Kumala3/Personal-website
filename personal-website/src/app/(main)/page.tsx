import Image from 'next/image';
import styles from '@/styles/homePage.module.css';
import SkillCard from '@/components/SkillCard';
import { ProjectCard } from '@/components/ProjectCard';
import { BlogCard } from '@/components/BlogCard';
import { TechnologyCard } from '@/components/TechnologyCard';

export default function HomePage() {
  return (
    <div className={`${styles.container}`}>
      {/* Hero Section */}
      <div className={styles.heroSectionContainer}>
        <div className={styles.leftPanel}>
          <div className={styles.nameHeader}>Kostiantyn Sytnyk</div>
          <div className={styles.shortBio}>
            I am a Young Entrepneur with a passion for AI, Technology & GameDev.
            I am technical person with deep knowledge of GenAI, Unity and
            creating modern, scalable Full-Stack web-apps. I am organized,
            determined and very sociable person with a love of learning and
            focus on finding & implementing innovative solutions!
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
      <div className={`${styles.featuredBlogsContainer}`}>
        <p className={styles.featuredBlogsTitle}>Featured Blogs</p>
        <div className={styles.featuredBlogsGrid}>
          <BlogCard
            title="Musk’s xAI Holdings is reportedly raising the second-largest private funding round ever"
            description="The funding could help alleviate X’s substantial debt burden, which is costing the company a whopping $200 million monthly in servicing fees, per Bloomberg’s sources, with annual interest expenses exceeding $1.3 billion by the end of last year.A raise of this size would also showcase AI’s continued investor appeal, as well as reflect Musk’s surprising emergence as a political power player inside President Trump’s White House."
            featuredImageURL="https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            isFeatured={true}
          />
          <BlogCard
            title="Chinese AI startup Manus reportedly gets funding from Benchmark at $500M valuation"
            description="Bloomberg’s report suggests that the fresh round has quintupled the valuation of Manus, which previously raised somewhere north of $10 million from backers including Tencent and HSG (formerly Sequoia China).Manus came into the spotlight in March when the company launched a demo of a general AI agent that could complete various tasks. (In TechCrunch’s testing, it didn’t work quite as well as advertised.) The company later launched paid subscription plans costing between $39 per month and $199 per month."
            featuredImageURL="https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1424498694.jpg?resize=1280,853"
            isFeatured={true}
          />
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className={`${styles.featuredProjectsContainer}`}>
        <p className={`${styles.featuredProjectsTitle}`}>Featured Projects</p>
        <div className={`${styles.featuredProjectsGrid}`}>
          <ProjectCard
            title="ChatGPT History"
            description="Find out how ChatGPT went from 100K users to 30ind out how ChatGPT went from 100K users to 300M monthly users. Dive dee0M monthly users. Dive deep into exploration of all product updates, new features, models, tools, new related products with a great timeline. See how old UI looked like and more!"
            imageURL="https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            liveURL="https://yaytext.com/"
            githubRepoURL="https://github.com/Kumala3"
            isFeatured={true}
          />
          <ProjectCard
            title="Personal Website"
            description="A moderind out how ChatGPT went from 100K users to 300M monthly users. Dive deen, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and blog articderind out how ChatGPT went from 100K users to 300M monthly users. Dive deen, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and blog articleles."
            imageURL="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
            liveURL="https://yourwebsite.com/"
            githubRepoURL="https://github.com/Kumala3"
            isFeatured={true}
          />
        </div>
      </div>

      {/* Skills & Technologies Section */}
      <div className={`${styles.skillsTechnologiesContainer}`}>
        {/* Skills Section */}
        <div className={styles.skillsContainer}>
          <p className={styles.skillsSectionTitle}>Skills</p>
          <div className={styles.skillsGrid}>
            <SkillCard
              name="Critical Thinking"
              size="small"
              description="I tackle problems by deeply analyzing the problem, finding & checking different paths to solve a problem."
              relatedProjects={[
                { projectTitle: 'SynapseFlow', projectId: 1 },
                { projectTitle: 'EcoBuddy', projectId: 2 },
              ]}
            />
            <SkillCard
              name="Efficient Communication"
              size="small"
              description="I am an effective communicator with active listening skill sharpened that allows me to deeply understand the problem/needs and execute further."
              relatedProjects={[
                { projectTitle: 'SynapseFlow', projectId: 1 },
                { projectTitle: 'EcoBuddy', projectId: 2 },
              ]}
            />
            <SkillCard
              name="Problem Solving"
              size="small"
              description="I am solving problem with different approaches by researching, analyzing, evaluating"
              relatedProjects={[
                { projectTitle: 'SynapseFlow', projectId: 1 },
                { projectTitle: 'EcoBuddy', projectId: 2 },
              ]}
            />
            <SkillCard
              name="Time Management"
              size="small"
              description="I have been applying dozens of different time management methods to manage my time better for productivity boost."
              relatedProjects={[
                { projectTitle: 'SynapseFlow', projectId: 1 },
                { projectTitle: 'EcoBuddy', projectId: 2 },
              ]}
            />
            <SkillCard
              name="Time Management"
              size="small"
              description="I have been applying dozens of different time management methods to manage my time better for productivity boost."
              relatedProjects={[
                { projectTitle: 'SynapseFlow', projectId: 1 },
                { projectTitle: 'EcoBuddy', projectId: 2 },
              ]}
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className={styles.technologiesContainer}>
          <p className={styles.technologiesSectionTitle}>Technologies</p>
          <div className={styles.technologiesGrid}>
            <TechnologyCard
              name="NextJS"
              description="1.5+ year of experience in building modern, responsive, dynamic web apps with Next.js. Some of my projects include fitness web app.I have over 1+ of experience in building modern, responsive & dynamic web apps with Next.js. I’ve built projects like fitness web app."
            />
            <TechnologyCard
              name="Django"
              description="2.5+ year of experience with using Django for modern, responsive web-apps."
            />
            <TechnologyCard
              name="PostgreSQL"
              description="2+ years of experiencing building modern web-apps with PostgreSQL database for effective database management system."
            />
            <TechnologyCard
              name="PostgreSQL"
              description="2+ years of experiencing building modern web-apps with PostgreSQL database for effective database management system."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
