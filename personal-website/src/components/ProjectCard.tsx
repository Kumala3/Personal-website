import Image from 'next/image';
import styles from '@/styles/projectCard.module.css';
import { ViewLiveButton } from './ui/buttons/ViewLiveButton';

interface ProjectCardProps {
  imageURL: string;
  isFeatured?: boolean;
  title: string;
  description: string;
  liveURL?: string;
  githubURL?: string;
}

export function ProjectCard({
  imageURL,
  title,
  isFeatured = false,
  description,
  liveURL,
  githubURL,
}: ProjectCardProps) {
  return (
    <div className={`${styles.container}`}>
        <Image
        src={imageURL}
        width={600}
        height={200}
        alt="Featured Image"
        className={`${styles.featuredImage}`}
        />
        <div className={`${styles.infoSection}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
        <div className={`${styles.actionButtons}`}>
        {/* Checking if liveURL is provided */}
        {liveURL && (
            <ViewLiveButton liveURL={liveURL} />
        )}
        {/* ReadFullButton, View Live Button, GitHubRepo Button*/}
        </div>
    </div>
  );
}
