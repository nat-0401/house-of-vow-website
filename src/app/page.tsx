import Image from "next/image";
import Link from "next/link";
import { assets } from "./content";

export default function Home() {
  return (
    <>
      <section className="home-hero-fullscreen">
        <Image
          className="home-hero-image"
          src={assets.homeMeadow}
          alt="Romantic wedding reception in red hues"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "center center" }}
        />
        <div className="home-hero-inner">
          <div className="home-hero-wordmark" aria-label="The House of Vows">
            <Image
              src={assets.logoHeroWordmark}
              alt=""
              width={2435}
              height={729}
              priority
            />
          </div>
          <p className="home-hero-script">Intentional wedding design shaped by beauty and story.</p>
        </div>
      </section>

      <section className="home-intro-section">
        <div className="home-shell home-overlap-stage">
          <div className="home-overlap-copy">
            <p className="eyebrow">Welcome</p>
            <h2>Designing celebrations that feel personal, polished, and lasting.</h2>
            <p>
              A calm, intentional approach to weddings shaped by story, atmosphere, and refined
              detail.
            </p>
            <Link href="/about" className="editorial-link">
              Read More
            </Link>
          </div>

          <div className="home-overlap-card primary-media">
            <Image
              src={assets.homeHillDark}
              alt="Bride and groom in a green landscape"
              fill
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </div>

          <div className="home-overlap-card secondary-media">
            <Image
              src={assets.homeBouquetFlatlay}
              alt="Bouquet and bridal shoes flat lay"
              fill
              sizes="220px"
            />
          </div>
        </div>
      </section>

      <section className="home-quiet-section">
        <div className="home-shell home-intro-grid">
          <div className="home-intro-image landscape-image">
            <Image
              src={assets.homeHillCouple}
              alt="Couple standing together on a green hill"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="home-story-copy">
            <p className="eyebrow">Quietly Elegant</p>
            <h2>For couples who care how it feels as much as how it looks.</h2>
            <p>
              Intimate, refined, and emotionally true.
            </p>
            <Link href="/contact" className="editorial-link">
              Start Your Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
