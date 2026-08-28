import Image from "next/image";
import { assets, partners, services } from "../content";
import { JsonLd, metadataForRoute, routeSeo, servicesJsonLd } from "../seo";

export const metadata = metadataForRoute(routeSeo.services);

export default function ServicesPage() {
  const partnerCards = [
    { name: partners[0], image: assets.partnerEditorialOne },
    { name: partners[1], image: assets.partnerEditorialTwo },
    { name: partners[2], image: assets.partnerEditorialThree },
  ];
  const activeServices = [services[1], services[0], services[2], services[3]];
  const serviceImages = [
    assets.servicesCardPlanning,
    assets.servicesCardConcept,
    assets.servicesCardBranding,
    assets.servicesCardDestination,
  ];
  const serviceSummaries = [
    "Calm planning, sharp timelines, and supplier coordination.",
    "A visual world shaped around your story and setting.",
    "A cohesive identity from logo to stationery and digital touchpoints.",
    "A thoughtful bridge between your celebration and a faraway place.",
  ];

  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <section className="services-editorial-hero">
        <Image
          src={assets.servicesHero}
          alt="Bride and groom walking outdoors"
          fill
          priority
          sizes="100vw"
        />
        <div className="services-editorial-title">
          <h1>
            Explore
            <span>the</span>
            Services
          </h1>
        </div>
      </section>

      <section className="services-editorial-intro">
        <p className="services-intro-kicker">The House of Vows</p>
        <h2>
          We bring curated details, artful stories, and seamless execution to
          weddings that feel deeply personal.
        </h2>
        <p>
          From visual direction to supplier coordination, each celebration is
          shaped with intention so every detail reflects the couple at the
          center of it all.
        </p>
      </section>

      <section className="services-offer-showcase" aria-labelledby="services-offer-title">
        <div className="services-offer-heading">
          <p className="eyebrow" id="services-offer-title">
            What we offer
          </p>
          <h2>
            A hand of services
            <span>for artful celebrations.</span>
          </h2>
        </div>
        <div className="services-card-hand">
          {activeServices.map((service, index) => (
            <article key={service.title} className="services-playing-card">
              <div className="services-card-image">
                <Image
                  src={serviceImages[index]}
                  alt={`${service.title} inspiration image`}
                  fill
                  sizes="(max-width: 720px) 82vw, 25vw"
                />
              </div>
              <div className="services-card-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p className="services-card-summary">{serviceSummaries[index]}</p>
                <p className="services-card-details">{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-partners-board" aria-labelledby="featured-partners-title">
        <div className="services-partners-stage">
          <h2 id="featured-partners-title" className="services-partners-title-back">
            Featured Partners
          </h2>
          <div className="services-partners-grid">
            {partnerCards.map((partner, index) => (
              <figure className="services-partner-card" key={partner.name}>
                <div className="services-partner-photo">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} featured partner editorial image`}
                    fill
                    sizes="(max-width: 900px) 78vw, 23vw"
                  />
                </div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{partner.name}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
//test
