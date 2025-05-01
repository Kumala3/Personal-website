"use client";
import styles from "@/styles/buttons/viewLiveButton.module.css";
import { GlobalIcon } from "@/components/ui/icons/GlobalIcon";

interface ViewLiveButtonProps {
    liveURL: string;
}

export function ViewLiveButton({liveURL}: ViewLiveButtonProps) {
    const handleViewLive = (liveURL: string) => {
        window.open(liveURL, "_blank", "noopener, noreferrer");
    }

    return (
        <button onClick={() => handleViewLive(liveURL)} className={`${styles.container}`}>
            <GlobalIcon className={`${styles.icon}`} />
            View Live
        </button>
    )
}
