import Image from "next/image";
import { founders } from "../content";
import { DesignFrame } from "../components/DesignFrame";
import { DesignPhoto } from "../components/DesignPhoto";
import { metadataForRoute, routeSeo } from "../seo";
import styles from "../client-design.module.css";

export const metadata = metadataForRoute(routeSeo.about);

function MissionImages({ continuation = false }: { continuation?: boolean }) {
  return <div className={`${styles.missionImages} ${continuation ? styles.continuation : ""}`} aria-hidden={continuation || undefined}>
    {["The planners discussing wedding details", "A floral wedding installation", "A planner preparing the final place settings"].map((alt, index) => <DesignPhoto key={alt} name={`mission-${index + 1}`} alt={continuation ? "" : alt} />)}
  </div>;
}

export default function AboutPage() {
  return <div className={styles.pages}>
    <DesignFrame className={styles.aboutIntro}>
      <DesignPhoto name="about-couple" alt="The wedding planners on location" className={styles.aboutFirst} />
      <DesignPhoto name="about-production" alt="A technician preparing wedding lighting" className={styles.aboutSecond} />
      <div className={styles.aboutPanel}>
        <h1 className={styles.label}>ABOUT US</h1>
        <p>Based in Malaysia, planning<br className={styles.desktopBreak} /> worldwide, we craft<br className={styles.desktopBreak} /> experiences that are deeply<br className={styles.desktopBreak} /> personal and visually timeless.</p>
        <p>We believe your wedding<br className={styles.desktopBreak} /> should be more than just a day<br className={styles.desktopBreak} /> — it should be a reflection of<br className={styles.desktopBreak} /> your journey, your love, and<br className={styles.desktopBreak} /> your values. Through<br className={styles.desktopBreak} /> thoughtful storytelling and<br className={styles.desktopBreak} /> intentional design, where love<br className={styles.desktopBreak} /> stories meet artful designs.</p>
      </div>
    </DesignFrame>
    <DesignFrame className={styles.aboutStory}>
      <DesignPhoto name="about-ballroom" alt="A celebration in a beautifully draped wedding ballroom" className={styles.reception} />
      <div className={styles.aboutPanel}>
        <p>From the first spark of<br className={styles.desktopBreak} /> inspiration to the final toast, we<br className={styles.desktopBreak} /> work closely with you to shape<br className={styles.desktopBreak} /> every detail — blending<br className={styles.desktopBreak} /> seamless coordination with<br className={styles.desktopBreak} /> refined aesthetics to ensure the<br className={styles.desktopBreak} /> entire experience feels as joyful<br className={styles.desktopBreak} /> as the celebration itself.</p>
        <p>Our goal is to <em>redefine wedding<br className={styles.desktopBreak} /> planning and designs in<br className={styles.desktopBreak} /> Malaysia,</em> bringing timeless<br className={styles.desktopBreak} /> celebrations to life with<br className={styles.desktopBreak} /> creativity, care, and<br className={styles.desktopBreak} /> authenticity.</p>
      </div>
    </DesignFrame>
    <DesignFrame className={styles.mission}>
      <h2 className={styles.label}>MISSION</h2>
      <p className={styles.missionLead}>To spark meaningful growth and recognition in wedding branding and storytelling — crafting experiences<br className={styles.desktopBreak} /> that go beyond the expected.</p>
      <p className={styles.missionBody}>We’re here to create deeply personal, visually unforgettable weddings tailored to every couple’s unique<br className={styles.desktopBreak} /> aesthetic. From concept to execution, every detail is thoughtfully designed to reflect each couple’s love story.</p>
      <MissionImages />
    </DesignFrame>
    <DesignFrame className={styles.vision}>
      <MissionImages continuation />
      <h2 className={styles.label}>VISION</h2>
      <blockquote>“We connect brides to beautifully curated destination weddings<br className={styles.desktopBreak} /> through intentional design and storytelling — redefining how<br className={styles.desktopBreak} /> love stories are told and celebrated.”</blockquote>
      <Image className={styles.visionWordmark} src="/client-design/wordmark.webp" alt="The House of Vows" width={167} height={48} />
    </DesignFrame>
    {founders.map((founder, index) => <DesignFrame key={founder.name} className={`${styles.founder} ${index ? styles.iyoun : ""}`}>
      <div className={styles.founderLeft}>
        <p className={styles.label}>THE WOMEN BEHIND</p>
        <p>{founder.bio.slice(0, 2).join(" ").replace("a successful branding", "a branding")}</p>
      </div>
      <DesignPhoto src={founder.image} alt={founder.name} className={styles.founderPhoto} />
      <h2 className={styles.founderName}>{founder.name}</h2>
      <div className={styles.founderRight}>{founder.bio.slice(2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </DesignFrame>)}
  </div>;
}
