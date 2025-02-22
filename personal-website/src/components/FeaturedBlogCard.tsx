import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/featuredBlogCard.module.css"

const FeaturedBlogCard = () => {
    const onReadFull = () => {
        // make a request here to get featured blog data
    }

    return (
        <div className={styles.blogCard}>
            <Image src={"/featured-blog-anthropic.png"} className={styles.blogCoverImage} width={800} height={200} alt="cover image"></Image>
            <div className={styles.blogInfo}>
                <span className={styles.blogTitle}>
                Anthropic new model is BEAST at coding! Just watch these use cases
                </span>
                <p className={styles.blogShortDescription}>
                    ChatGPT Deep Research is an advanced tool that goes beyond standard search by reviewing multiple sources, comparing information, and generating comprehensive answers in minutes—saving you hours of manual research. But, as always, a well-crafted prompt makes all the difference.
                    In the sections below, we’ll introduce three high-detail prompt templates that you can easily customize for any trip. Whether you’re planning a quick weekend getaway or a multi-country adventure, these prompts will turn ChatGPT into your savvy travel agent. We’ll also discuss how to tailor them for different types of travelers—digital nomads, budget backpackers, or luxury seekers—so the advice you get matches your travel style.
                    🔥 Real-World Use Case: Developers are using it to auto-detect edge cases, optimize SQL queries, and even suggest ways to prevent common security loopholes like SQL injection or buffer overflows.
                </p>
                <Link className={styles.readFullBtn} href={"/blog/1"} onClick={onReadFull()}>Read Full</Link>
            </div>
        </div>
    );
    
}

export default FeaturedBlogCard;
