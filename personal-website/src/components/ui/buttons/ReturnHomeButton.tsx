"use client";
import {useRouter} from "next/navigation";
import styles from "@/styles/buttons/homeReturnButton.module.css";

export function ReturnHomeButton() {
    const router = useRouter();

    const handleReturnHome = () => {
        router.push("/");
    }
    
    return (
        <button onClick={handleReturnHome} className={styles.returnHomeButton}>
            Return Home
        </button>
    )

} 
