import Image from "next/image";
import Link from "next/link";
import { assets } from "./content";
import { metadataForRoute, routeSeo } from "./seo";

export const metadata = metadataForRoute(routeSeo.home);

export default function Home() {
  return (
    <div className="redesign-page redesign-home">
      <section className="redesign-home-hero">
        <Image
          className="redesign-home-hero-image"
          src={assets.homeDesignHero}
          alt="The House of Vows wordmark over a black and white wedding ceremony"
          fill
          preload
          sizes="100vw"
          style={{ objectPosition: "center center" }}
        />
      </section>

      <section className="redesign-welcome">
        <div className="redesign-welcome-inner">
          <p className="eyebrow">Welcome</p>
          <h1>
            At the heart of every unforgettable wedding is a story waiting to be told —
            <br className="redesign-desktop-break" />
            <em>beautifully, intentionally, and authentically.</em>
          </h1>
          <div className="redesign-welcome-bottom">
            <p>
              Here at The House of Vows, we specialise in wedding branding, styling, and planning
              that goes far beyond the expected.
            </p>
            <Link href="/about" className="redesign-pill-link">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="redesign-home-story">
        <div className="redesign-story-images" aria-label="Wedding planning and celebration">
          <div className="redesign-story-image redesign-story-image-wide">
            <Image
              src={assets.homeStorySetup}
              alt="A wedding planner carefully setting a reception table"
              fill
              sizes="(max-width: 720px) 100vw, 58vw"
            />
          </div>
          <div className="redesign-story-image redesign-story-image-tall">
            <Image
              src={assets.homeStoryBallroom}
              alt="A wedding celebration beneath a dramatic ballroom installation"
              fill
              sizes="(max-width: 720px) 78vw, 25vw"
            />
          </div>
        </div>
        <div className="redesign-home-story-copy">
          <h2>We&apos;re not just planners — we&apos;re your story&apos;s most thoughtful custodians.</h2>
          <Link href="/contact" className="redesign-pill-link redesign-pill-link-light">
              Schedule a Call Now
            </Link>
        </div>
      </section>
    </div>
  );
}
