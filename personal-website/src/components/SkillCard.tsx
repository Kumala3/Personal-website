'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/skillCard.module.css';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { ReadFullButton } from '@/components/ui/buttons/ReadFullButton';
import { SkillIcon } from '@/components/ui/icons/SkillsIcons';

interface RelatedProject {
  projectTitle: string;
  projectId: number;
}

interface SkillCardProps {
  size?: 'large' | 'small';
  title: string;
  description: string;
  relatedProjects?: RelatedProject[];
}

const SkillCard = ({
  size = 'large',
  title,
  description,
  relatedProjects,
}: SkillCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenCard = () => {
    setIsModalOpen(true);
  };

  const handleNavigateToProject = (projectId: number) => {
    router.push('/projects');
  };

  const skillIcon = (title: string) => {
    return <SkillIcon name={title} className={styles.iconSkill} />;
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardTopLayout}>
          {skillIcon(title)}
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.skillCardDescription}>{description}</p>
        <ReadFullButton size={size} onClick={handleOpenCard} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 bg-gray-800/75 flex items-center justify-center">
          <div className="bg-white w-[80%] h-[50%] p-5 rounded-lg">
            <h2 className={styles.skillNameModal}>{title}</h2>
            <p className={styles.skillDescriptionModal}>{description}</p>
            {/* Related projects section */}
            <div className={styles.relatedProjectsContainer}>
              <p className={styles.relatedProjectsLabel}>Related projects:</p>
              {relatedProjects?.map((project, index) => (
                <div key={index} className={styles.relatedProjectElem}>
                  <p className="">{project.projectTitle}</p>
                  <IoArrowForwardCircleOutline
                    size={35}
                    className="hover:cursor-pointer"
                    onClick={() => handleNavigateToProject(project.projectId)}
                  />
                </div>
              ))}
            </div>
            {/* replace with close icon */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillCard;
