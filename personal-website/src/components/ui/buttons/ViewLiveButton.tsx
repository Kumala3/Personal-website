import Link from "next/link";
import styles from "@/styles/buttons/viewLiveButton.module.css";
import { GlobalIcon } from "@/components/ui/GlobalIcon";

interface ViewLiveButtonProps {
    liveURL: string;
}

export function ViewLiveButton({liveURL}: ViewLiveButtonProps) {
    return (
        <Link href={liveURL} target="_blank" rel="noreferrer" className={`${styles.container}`}>
            <GlobalIcon className={`${styles.icon}`} />
            <p>View Live</p>
        </Link>
    )
}
