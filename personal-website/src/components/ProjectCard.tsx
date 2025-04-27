import Image from 'next/image';
import styles from '@/styles/projectCard.module.css';
import { ViewLiveButton } from './ui/buttons/ViewLiveButton';
import { ReadFullButton } from './ui/buttons/ReadFullButton';
import { GitHubRepoButton } from './ui/buttons/GitHubRepoButton';

interface ProjectCardProps {
  imageURL: string;
  isFeatured?: boolean;
  title: string;
  description: string;
  liveURL?: string;
  githubRepoURL?: string;
}

export function ProjectCard({
  imageURL,
  title,
  isFeatured = false,
  description,
  liveURL,
  githubRepoURL,
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
        <h3 className={`${styles.title} ${isFeatured ? styles.titleFeatured : ""}`}>{title}</h3>
        <p className={`${styles.description}`}>{description}</p>
      </div>
      <div className={`${styles.actionButtons}`}>
        <ReadFullButton title={title} />
        {/* Checking if liveURL is provided */}
        {liveURL && <ViewLiveButton liveURL={liveURL} />}
        {githubRepoURL && <GitHubRepoButton githubRepoURL={githubRepoURL} />}
        {/* ReadFullButton, View Live Button, GitHubRepo Button*/}
      </div>
    </div>
  );
}
