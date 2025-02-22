"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/skillCard.module.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface RelatedProject {
    projectTitle: string,
    projectId: number,
}

interface SkillCard {
    skillName: string,
    skillDescription: string,
    relatedProjects?: RelatedProject[],
}

const SkillCard = ({skillName, skillDescription, relatedProjects}: SkillCard) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const onCardClick = () => {
        setIsModalOpen(true);
    }
    const onProjectNavigateClick = (projectId: number) => {
        router.push("/projects");
    }

    return (
        <>
            <div 
                className={`${styles.skillCard} hover:scale-[1.05] duration-200`} 
                onClick={onCardClick}
            >
                <p className={styles.skillName}>{skillName}</p>
                <p className={styles.skillDescription}>{skillDescription}</p>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-10 bg-gray-800/75 flex items-center justify-center">
                    <div className="bg-white w-[80%] h-[50%] p-5 rounded-lg">
                        <h2 className={`${styles.skillNameModal}`}>{skillName}</h2>
                        <p className={`${styles.skillDescriptionModal}`}>{skillDescription}</p>
                        {/* Related projects section */}
                        <div>
                            <p className={`${styles.relatedProjectsLabel}`}>Related projects:</p>
                            {relatedProjects?.map((project, index) => (
                            <div key={index} className={styles.relatedProjectElem}>
                                <p className="">{project.projectTitle}</p>
                                <IoArrowForwardCircleOutline size={35} className="hover:cursor-pointer" onClick={() => onProjectNavigateClick(project.projectId)} />
                            </div>
                        ))}
                        </div>
                        {/* replace with close icon */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default SkillCard;
