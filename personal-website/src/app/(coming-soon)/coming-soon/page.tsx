"use client";
import styles from '@/styles/comingSoon.module.css';
import { useRouter } from 'next/navigation';

export default function ComingSoon() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.mainContainer}>
      <p className={styles.headerText}>Coming Soon...</p>
      <p className={styles.subheaderText}>
        Hard work happens behind the scenes to bring you all great experience!
      </p>
      <button onClick={handleReturnHome} className={styles.returnHomeButton}>
        Return Home
      </button>
    </div>
  );
}
