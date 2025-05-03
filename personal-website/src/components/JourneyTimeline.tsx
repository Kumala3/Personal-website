import styles from '@/styles/journeyTimeline.module.css';
import { JourneyCard } from '@/components/JourneyCard';

export function JourneyTimeline() {
  return (
    <div className={styles.container}>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineBar}>
          {/* Timeline Points */}
          <div className={styles.timelinePoint}></div>
          <div className={styles.timelinePoint}></div>
          <div className={styles.timelinePoint}></div>
          <div className={styles.timelinePoint}></div>
        </div>

        <div className={styles.cardsContainer}>
          {/* JourneyCard */}
          <JourneyCard
            title="Childhood Curiosity"
            wave={1}
            startYear="2022"
            description="Started opening up old computers brought by dad just to see how they worked under the hood and play around with cool electronics inside. Every week, I was googling more than 100 times about different parts of computer to find out how they work independently, together, what impact each component had on each other and much more!"
          />
          <JourneyCard
            title="First Lines of Code"
            wave={2}
            startYear="2021"
            description="Built my first interactive web app with Django & Vanilla JS at age 13 — it was ugly, but it worked."
          />
          <JourneyCard
            title="High School"
            wave={3}
            startYear="2023"
            endYear="2027"
            description="Studying Math, Computer Science, Physics to get essential knowledge + understand how tech solves real problems."
          />
          <JourneyCard
            title="Diving into GenAI"
            wave={4}
            startYear="2022"
            endYear="current"
            description="Hooked by the potential of AI — now building, experimenting, and sharing insights."
          />
        </div>
      </div>
    </div>
  );
}
