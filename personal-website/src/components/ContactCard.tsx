import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import styles from "@/styles/contactCard.module.css";
import Link from "next/link";

interface ContactCard {
    label: string,
    iconName: string,
}

const ContactCard = ({label, iconName}: ContactCard) => {
    const icon = (iconName: string) => {
        switch (iconName) {
            case "LinkedIn":
                return <IoLogoLinkedin size={60} />;
            case "GitHub":
                return <IoLogoGithub size={60} />;
            default:
                return;
        }
    }

    const URLProfile = (label: string) => {
        switch (label) {
            case "LinkedIn":
                return "https://www.linkedin.com/in/kostek-sytnyk/";
            case "GitHub":
                return "https://github.com/Kumala3";
            default:
                return "";
        }
    }

    return (
        <Link href={URLProfile(label)} className={`${styles.contactCard} hover:scale-[1.03] duration-200`}>
            <div>{icon(iconName)}</div>
            <div className={`${styles.label}`}>{label}</div>
        </Link>
    )
}

export default ContactCard;
