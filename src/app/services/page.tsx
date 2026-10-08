import Image from "next/image";
import { DesignFrame } from "../components/DesignFrame";
import { DesignPhoto } from "../components/DesignPhoto";
import { JsonLd, metadataForRoute, routeSeo, servicesJsonLd } from "../seo";
import styles from "../client-design.module.css";

export const metadata = metadataForRoute(routeSeo.services);
const offerings = [
  { title: <>Wedding Planning<br />&amp; Coordination</>, body: <>Comprehensive planning and seamless<br className={styles.desktopBreak} /> coordination for a celebration that feels<br className={styles.desktopBreak} /> effortless from beginning to end.</> },
  { title: <>Wedding Concept<br />&amp; Styling</>, body: <>Bringing your wedding vision to life through<br className={styles.desktopBreak} /> considered styling and professional 3D<br className={styles.desktopBreak} /> visualisation before the celebration takes<br className={styles.desktopBreak} /> shape.</> },
  { title: <>Wedding Branding<br />Design</>, body: <>Translating your story into a distinctive<br className={styles.desktopBreak} /> visual identity, thoughtfully woven<br className={styles.desktopBreak} /> throughout your celebration.</> },
  { title: <>Destination Wedding<br />Liaison</>, body: <>Making destination weddings feel closer,<br className={styles.desktopBreak} /> simpler, and beautifully considered.</> },
];

export default function ServicesPage() {
  return <div className={styles.pages}>
    <JsonLd data={servicesJsonLd} />
    <section className={styles.hero}>
      <h1 className="sr-only">Explore our services</h1>
      <p className={styles.servicesMobileTitle} aria-hidden="true">EXPLORE <em>our</em><br />SERVICES</p>
      <Image src="/client-design/services-hero.webp" alt="Explore our services: The House of Vows planners on location" fill preload sizes="100vw" quality={85} />
    </section>
    <DesignFrame className={styles.services}>
      <p className={styles.label}>WHAT WE BRING TO THE TABLE</p>
      <h2 className={styles.servicesTitle}>Curated <em>details</em>, artful <em>stories</em>, seamless <em>execution</em></h2>
      <div className={styles.offerings}>{offerings.map((service, index) => <article key={index}>
        <DesignPhoto name="placeholder" alt="" />
        <div className={styles.serviceHeading}><h3>{service.title}</h3><span aria-hidden="true">0{index + 1}</span></div>
        <p>{service.body}</p>
      </article>)}</div>
    </DesignFrame>
    <DesignFrame className={styles.partners} id="featured-partners">
      <h2>Featured<br />PARTNERS</h2>
      <div className={styles.partnerItems}>
        {[{ name: "Handwritten by Lee", role: "WEDDING CALLIGRAPHER", body: "Bespoke hand-lettered details, crafted to give every celebration a distinctly personal touch." }, { name: "Ooh La La", role: "WEDDING DECORATOR", body: "Transforming spaces through thoughtful decor, refined details and beautifully considered execution." }].map((partner, index) => <article key={partner.name}>
          <DesignPhoto name="placeholder" alt="" />
          <div className={styles.partnerCopy}><span aria-hidden="true">0{index + 1}</span><div><h3>{partner.name}</h3><p>{partner.role}</p><p><em>{partner.body}</em></p></div></div>
        </article>)}
      </div>
    </DesignFrame>
  </div>;
}
