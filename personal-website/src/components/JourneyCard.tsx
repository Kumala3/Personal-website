'use client';
import styles from '@/styles/journeyCard.module.css';
import { ReadFullButton } from '@/components/ui/buttons/ReadFullButton';

interface JourneyCardProps {
  title: string;
  wave: number;
  startYear?: string;
  endYear?: string;
  description: string;
}

export function JourneyCard({
  title,
  wave,
  startYear,
  endYear,
  description,
}: JourneyCardProps) {
  const handleOpenCard = () => {};

  return (
    <div className={styles.container}>
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
      {/* ReadFull Button */}
      <ReadFullButton size="large" onClick={handleOpenCard} />
    </div>
  );
}
