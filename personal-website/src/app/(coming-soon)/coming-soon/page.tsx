import styles from '@/styles/comingSoon.module.css';
import { ReturnHomeButton } from '@/components/ui/buttons/ReturnHomeButton';

export default function ComingSoon() {

  return (
    <div className={styles.mainContainer}>
      <p className={styles.headerText}>Coming Soon...</p>
      <p className={styles.subheaderText}>
        Hard work happens behind the scenes to bring you all great experience!
      </p>
      <ReturnHomeButton />
    </div>
  );
}
