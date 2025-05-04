import styles from '@/styles/aboutPage.module.css';
import { JourneyTimeline } from '@/components/JourneyTimeline';
import { JourneyTimelineExample } from '@/components/journeyTimelineExample';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h2 className={styles.mainHeadline}>Curiosity Fueled My Journey</h2>
        <p className={styles.subHeadline}>
          From childhood tinkering to exploring the frontiers of Generative AI.
        </p>
      </div>

      {/* Journey Section */}
      <div className={styles.journeySection}>
        {/* Horizontal Timeline */}
        {/* <JourneyTimeline /> */}
        <JourneyTimelineExample />
      </div>

      {/* Current Passion Section */}
      <div className={styles.currentPassionSection}>
        <h2 className={styles.headline}>Exploring the world of AI & Tech</h2>
        <p className={styles.textQuote}>
          Today, I actively research the intersection of creativity and AI —
          working on projects, resources that bridge human creativity and
          machine precision. I am currently working on “AI Investigator”, which
          tells the full history of popular chatbots such as ChatGPT, Claude,
          Gemini to spread awareness among AI enthusiasts, Educators and all
          those who are interested in how there tools went from zero to being
          used by 600 Million users weekly!
        </p>
      </div>

      {/* GenAI Tools Tested Section */}
      <div className={styles.genAIToolsSection}>
        <h2 className={styles.headline}>
          A list of GenAI tools with deep expertise
        </h2>
        {/* GenAI Tools Infinite Horizontal Carousel right direction */}
        {/* GenAI Tools Infinite Horizontal Carousel left direction */}
      </div>

      {/* Fun Facts Section */}
      <div className={styles.funFactsSection}>{/* Fun Facts Cards */}</div>

      {/* CTA Section Component */}
    </div>
  );
}
