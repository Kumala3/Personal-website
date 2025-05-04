'use client';
import styles from '@/styles/journeyCard.module.css';

interface JourneyCardProps {
  title: string;
  wave: number;
  startYear?: string;
  endYear?: string;
  description: string;
  containerClassName: string;
}

export function JourneyCard({
  title,
  wave,
  startYear,
  endYear,
  description,
  containerClassName,
}: JourneyCardProps) {
  const handleOpenCard = () => {};
  
  return (
    <div className={`${containerClassName}`}>
      <div className={styles.metaInfo}>
        <div className={styles.topLayout}>
          <h6>{title}</h6>
          <p>-</p>
          <p>Wave {wave}</p>
        </div>
        {startYear && endYear ? (
          <p className={styles.yearRange}>
            [{startYear}-{endYear}]
          </p>
        ) : (
          <p className={styles.yearRange}>[{startYear}]</p>
        )}
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
