import styles from '@/styles/journeyTimelineExample.module.css';
import { JourneyCard } from './JourneyCard';

export function JourneyTimelineExample() {
  /* JS CODE /*
  /*
  // VARIABLES
  const elH = document.querySelectorAll('.timeline li > div');

  // START
  window.addEventListener('load', init);

  function init() {
    setEqualHeights(elH);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }
  */

  return (
    <>
      <section className={styles.timelineContainer}>
        <ol className={styles.timelineWrapper}>
          <li className={styles.cardWrapper}>
            <JourneyCard
              title="Childhood Curiosity"
              wave={1}
              description="Started opening up old computers brought by dad just to see how they worked under the hood and play around with cool electronics inside. Every week, I was googling more than 100 times about different parts of computer to find out how they work independently, together, what impact each component had on each other and much more!"
              containerClassName={styles.milestoneCard}
            />
          </li>
          <li className={styles.cardWrapper}>
            <JourneyCard
              title="First Lines of Code"
              wave={2}
              startYear="2021"
              description="Built my first interactive web app with Django & Vanilla JS at age 13 — it was ugly, but it worked."
              containerClassName={styles.milestoneCard}
            />
          </li>
          <li className={styles.cardWrapper}>
            <JourneyCard
              title="High School"
              wave={3}
              startYear="2023"
              endYear="2027"
              description="Studying Math, Computer Science, Physics to get essential knowledge + understand how tech solves real problems."
              containerClassName={styles.milestoneCard}
            />
          </li>
          <li className={styles.cardWrapper}>
            <JourneyCard
              title="Diving into GenAI"
              wave={4}
              startYear="2022"
              endYear="current"
              description="Hooked by the potential of AI — now building, experimenting, and sharing insights."
              containerClassName={styles.milestoneCard}
            />
          </li>
          <li className={styles.cardWrapper}></li>
        </ol>
      </section>
    </>
  );
}
