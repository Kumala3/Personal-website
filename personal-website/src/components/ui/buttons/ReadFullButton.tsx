'use client';
import styles from '@/styles/buttons/readFullButton.module.css';
import { EyeIcon } from '@/components/ui/EyeIcon';

interface ReadFullButtonProps {
  title: string;
}

export function ReadFullButton({ title }: ReadFullButtonProps) {
  const handleReadFull = (title: string) => {
    // redirect to the project page
  };

  return (
    <button
      onClick={() => handleReadFull(title)}
      className={`${styles.container}`}>
      <EyeIcon className={`${styles.icon}`} />
      Read Full
    </button>
  );
}
