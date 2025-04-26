import Link from "next/link";
import { MouseEvent } from "react";

interface MobileNavElemProps {
    text: string;
    href: string;
    className?: string;
    onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function MobileNavElem({text, href, onClick, className = ""}: MobileNavElemProps) {
    return (
        <Link href={href} onClick={onClick} className={`${className}`}>
            {text}
        </Link>
    )
}
