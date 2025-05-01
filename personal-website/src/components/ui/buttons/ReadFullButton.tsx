'use client';
import styles from '@/styles/buttons/readFullButton.module.css';
import { EyeIcon } from '@/components/ui/icons/EyeIcon';

interface ReadFullButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: "large" | "small";
}

export function ReadFullButton({ size, onClick }: ReadFullButtonProps) {
  const containerClassName = size === "small" ? styles.containerSmall : styles.container;
  const iconClassName = size === "small" ? styles.iconSmall : styles.icon;

  return (
    <button
      onClick={onClick}
      className={containerClassName}>
      <EyeIcon className={iconClassName} />
      Read Full
    </button>
  );
}
