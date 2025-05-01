'use client';
import { useState } from 'react';
import styles from '@/styles/technologyCard.module.css';
import { ReadFullButton } from './ui/buttons/ReadFullButton';
import { TechnologyIcon } from '@/components/ui/icons/TechnologyIcon';

interface TechnologyCardProps {
  name: string;
  description: string;
}

export function TechnologyCard({ name, description }: TechnologyCardProps) {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleOpenCard = () => {
    setIsModalOpened(true);
  };

  const technologyIcon = (name: string) => {
    return <TechnologyIcon name={name} className={styles.technologyIcon} />;
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardTopLayout}>
          {technologyIcon(name)}
          <p className={styles.title}>{name}</p>
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <ReadFullButton onClick={handleOpenCard} size="small" />
      </div>

      {/* Modal when onClick event triggers on ReadFullButton */}
      {isModalOpened && <div className={styles.modalContainer}></div>}
    </>
  );
}
