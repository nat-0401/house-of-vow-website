import Image from "next/image";
import Link from "next/link";
import { DesignFrame } from "./components/DesignFrame";
import { DesignPhoto } from "./components/DesignPhoto";
import { metadataForRoute, routeSeo } from "./seo";
import styles from "./client-design.module.css";

export const metadata = metadataForRoute(routeSeo.home);

export default function Home() {
  return <div className={styles.pages}>
    <section className={styles.hero}>
      <h1 className="sr-only">The House of Vows</h1>
      <Image src="/client-design/home-hero.webp" alt="The House of Vows at a wedding ceremony" fill preload sizes="100vw" quality={85} />
    </section>
    <DesignFrame className={styles.welcome}>
      <p className={styles.welcomeLabel}>WELCOME</p>
      <h2 className={styles.welcomeTitle}>At the heart of every unforgettable wedding is a story waiting to be told —<br /><em>beautifully, intentionally, and authentically.</em></h2>
      <p className={styles.welcomeBody}>Here at The House of Vows, we specialise in wedding branding, styling, and<br className={styles.desktopBreak} /> planning that goes far beyond the expected.</p>
      <Link href="/about" className={`${styles.pill} ${styles.welcomeButton}`}>LEARN MORE ABOUT US</Link>
    </DesignFrame>
    <DesignFrame className={styles.homeStory}>
      <DesignPhoto name="home-planner" alt="A wedding planner setting a reception table" className={styles.storyWide} />
      <DesignPhoto name="home-ballroom" alt="A celebration beneath a draped ballroom ceiling" className={styles.storyTall} />
      <h2 className={styles.storyTitle}>We’re not just planners —<br />we’re your story’s most thoughtful custodians.</h2>
      <Link href="/contact" className={`${styles.pill} ${styles.storyButton}`}>SCHEDULE A CALL NOW</Link>
    </DesignFrame>
  </div>;
}
