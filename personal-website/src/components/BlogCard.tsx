import Image from 'next/image';
import styles from '@/styles/blogCard.module.css';
import { ReadFullButton } from '@/components/ui/buttons/ReadFullButton';

interface BlogCardProps {
  title: string;
  description: string;
  featuredImageURL: string;
  isFeatured?: boolean;
}

export function BlogCard({
  title,
  description,
  featuredImageURL,
  isFeatured = false,
}: BlogCardProps) {
  return (
    <div className={styles.container}>
      <Image
        src={featuredImageURL}
        width={100}
        height={100}
        className={styles.featuredImage}
        alt="Featured Image"
      />
      <div className={styles.infoSection}>
        <h4 className={`${styles.title} ${isFeatured ? styles.titleFeatured: ""}`}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={`${styles.actionButtons}`}>
        <ReadFullButton title={title} />
      </div>
    </div>
  );
}
