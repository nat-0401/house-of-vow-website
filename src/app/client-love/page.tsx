import Image from "next/image";
import { ClientLoveQuoteSlider } from "../components/ClientLoveQuoteSlider";
import { assets } from "../content";
import { metadataForRoute, routeSeo } from "../seo";

export const metadata = metadataForRoute(routeSeo.clientLove);

const clientQuotes = [
  {
    couple: "Arielle & James",
    image: assets.clientLoveQuoteTwo,
    quote:
      "They held the whole celebration with such care. We were able to be fully present with the people we love.",
  },
  {
    couple: "Sophie & Nathan",
    image: assets.clientLoveQuoteThree,
    quote:
      "The design, the rhythm, the details, everything felt considered. It was elegant without ever feeling distant.",
  },
  {
    couple: "Clara & Theo",
    image: assets.clientLoveQuoteFour,
    quote:
      "It felt composed, romantic, and completely ours. Every moment had space to breathe.",
  },
];

export default function ClientLovePage() {
  return (
    <>
      <section className="client-love-editorial" aria-labelledby="client-love-title">
        <div className="client-love-side-image side-left">
          <Image src={assets.clientLoveOne} alt="Bride and groom in an estate garden" fill priority sizes="18vw" />
        </div>
        <div className="client-love-main-image">
          <Image
            src={assets.clientLoveHero}
            alt="Bride and groom walking through bubbles after their ceremony"
            width={700}
            height={1052}
            priority
            sizes="(max-width: 720px) 92vw, 46vw"
            className="client-love-hero-image"
          />
        </div>
        <div className="client-love-side-image side-right">
          <Image src={assets.clientLoveThree} alt="Bride and groom framed by garden florals" fill sizes="18vw" />
        </div>
        <div className="client-love-heading-block">
          <h1 id="client-love-title">
            Client
            <span>Love</span>
          </h1>
        </div>
      </section>

      <section className="client-testimonial-feature" aria-label="Client testimonial">
        <ClientLoveQuoteSlider quotes={clientQuotes} />
      </section>
    </>
  );
}
