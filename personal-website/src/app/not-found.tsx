import { ReturnHomeButton } from "@/components/ui/buttons/ReturnHomeButton";
import styles from "@/styles/notFound.module.css";

export default function NotFound() {
    return (
        <div className={`${styles.container}`}>
            <h1 className={`${styles.headerText}`}>Page Not Found 404</h1>
            <ReturnHomeButton />
        </div>
    )
}
