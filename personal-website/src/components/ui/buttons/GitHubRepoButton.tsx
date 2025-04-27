"use client";
import styles from "@/styles/buttons/githubRepoButton.module.css";
import { GitHubIcon } from "@/components/ui/GitHubIcon";

interface GitHubRepoButtonProps {
    githubRepoURL: string;
}

export function GitHubRepoButton({githubRepoURL}: GitHubRepoButtonProps) {
    const handleGitHubRepo = (githubRepoURL: string) => {
        // redirect to the github by provided URL
        window.open(githubRepoURL, "_blank", "noopener, noreferrer");
    }
    
    return (
        <button onClick={() => handleGitHubRepo(githubRepoURL)} className={`${styles.container}`}>
            <GitHubIcon className={`${styles.icon}`} />
            GitHub Repo
        </button>
    )
}
