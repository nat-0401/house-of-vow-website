import Image from "next/image";
import {
  assets,
  founders,
  missionCopy,
  visionCopy,
} from "../content";
import { VisionSlider } from "../components/VisionSlider";

export default function AboutPage() {
  return (
    <>
      <section className="about-story-hero">
        <div className="about-story-frame">
          <Image
            src={assets.aboutFieldCouple}
            alt="Bride and groom seated in a flower field"
            fill
            priority
            unoptimized
            sizes="(max-width: 1240px) 100vw, 1200px"
          />
        </div>
        <div className="about-story-card about-reveal">
          <p className="eyebrow">About Us</p>
          <h1>For weddings that feel as considered as they look.</h1>
          <p>
            The House of Vows creates deeply personal, visually unforgettable
            weddings shaped around meaning, beauty, and calm execution.
          </p>
        </div>
      </section>

      <section className="about-scroll-story">
        <div className="about-scroll-copy about-reveal">
          <p className="eyebrow">Mission</p>
          <h2>To create celebrations with meaning, beauty, and calm execution.</h2>
          <div>
            {missionCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="about-scroll-image about-reveal">
          <Image
            src={assets.aboutRedReception}
            alt="Wedding reception table with red florals"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </section>

      <section className="about-vision-strip">
        <div className="about-vision-inner about-reveal">
          <VisionSlider quotes={visionCopy} />
        </div>
      </section>

      <section className="women-behind">
        <div className="women-heading about-reveal">
          <p className="eyebrow">The Women Behind</p>
          <h2>Iyoun &amp; Esther&apos;s story.</h2>
        </div>
        <div className="founder-profiles">
          {founders.map((founder) => (
            <article className="founder-profile about-reveal" key={founder.name}>
              <div className="founder-image">
                <Image src={founder.image} alt={founder.name} fill sizes="40vw" />
              </div>
              <div>
                <h3>{founder.name}</h3>
                {founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
