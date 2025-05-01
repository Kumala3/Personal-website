import styles from '@/styles/footerNavElem.module.css';
import Link from "next/link";

interface FooterNavElemProps {
  text: string;
  href: string;
}

export function FooterNavElem({ text, href }: FooterNavElemProps) {
  return (
    <Link href={href} className={styles.container}>
      <p className={styles.text}>{text}</p>
    </Link>
  );
}
