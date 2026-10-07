import Image from "next/image";
import Link from "next/link";
import { assets, founders, missionCopy, visionCopy } from "../content";
import { VisionSlider } from "../components/VisionSlider";
import { metadataForRoute, routeSeo } from "../seo";

export const metadata = metadataForRoute(routeSeo.about);

const storyImages = [
  { src: assets.aboutOpeningCouple, alt: "A soft-focused wedding portrait" },
  { src: assets.aboutOpeningEvent, alt: "A lighting technician preparing a wedding event" },
];

export default function AboutPage() {
  return (
    <div className="redesign-page redesign-about">
      <section className="redesign-about-intro">
        <div className="redesign-about-collage" aria-label="Wedding moments">
          {storyImages.map((image) => (
            <div className="redesign-about-collage-image" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 90vw, 27vw" />
            </div>
          ))}
        </div>
        <div className="redesign-about-intro-copy">
          <p className="eyebrow">About Us</p>
          <h1>Based in Malaysia, planning worldwide, we craft experiences that are deeply personal and visually timeless.</h1>
          <p>
            We believe your wedding should be more than just a day — it should be a reflection of
            your journey, your love, and your values. Through thoughtful storytelling and
            intentional design, where love stories meet artful designs.
          </p>
        </div>
      </section>

      <section className="redesign-about-story">
        <div className="redesign-about-story-image">
          <Image
            src={assets.aboutStoryReception}
            alt="A wedding reception beneath a draped ballroom ceiling"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
        </div>
        <div className="redesign-about-story-copy">
          <p>
            From the first spark of inspiration to the final toast, we work closely with you to
            shape every detail — blending seamless coordination with refined aesthetics to ensure the
            entire experience feels as joyful as the celebration itself.
          </p>
          <p>
            Our goal is to redefine wedding planning and designs in Malaysia, bringing timeless
            celebrations to life with creativity, care, and authenticity.
          </p>
        </div>
      </section>

      <section className="redesign-mission">
        <div className="redesign-mission-copy">
          <p className="eyebrow">Mission</p>
          <h2>{missionCopy[0]}</h2>
          <div className="redesign-mission-paragraphs">
            {missionCopy.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="redesign-mission-images">
          {[
            { src: assets.aboutMissionMomentOne, alt: "The planners discussing event details" },
            { src: assets.aboutMissionMomentTwo, alt: "A floral ceremony display" },
            { src: assets.aboutMissionMomentThree, alt: "A planner placing a final place setting" },
          ].map((image) => (
            <div className="redesign-mission-image" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 80vw, 24vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="redesign-vision">
        <VisionSlider quotes={visionCopy} />
      </section>

      <section className="redesign-founders">
        {founders.map((founder) => {
          const midpoint = Math.ceil(founder.bio.length / 2);
          const firstHalf = founder.bio.slice(0, midpoint);
          const secondHalf = founder.bio.slice(midpoint);

          return (
            <article className="redesign-founder" key={founder.name}>
              <div className="redesign-founder-copy">
                <p className="eyebrow">The Women Behind</p>
                {firstHalf.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="redesign-founder-portrait">
                <Image src={founder.image} alt={founder.name} fill sizes="(max-width: 760px) 88vw, 31vw" />
                <h2>{founder.name}</h2>
              </div>
              <div className="redesign-founder-copy redesign-founder-copy-second">
                <p className="eyebrow">Our Founders</p>
                {secondHalf.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          );
        })}
        <Link href="/contact" className="redesign-pill-link redesign-pill-link-light">
          Enquire About Your Wedding
        </Link>
      </section>
    </div>
  );
}
