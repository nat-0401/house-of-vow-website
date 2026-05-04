import Image from "next/image";
import { EditCarousel } from "../components/EditCarousel";
import { assets } from "../content";

const carouselImages = [
  { src: assets.editDoorwayCouple, alt: "Bride and groom framed by an arched doorway" },
  { src: assets.editGardenTable, alt: "Editorial outdoor wedding reception table" },
  { src: assets.editInteriorCouple, alt: "Bride and groom in a moody interior venue" },
  { src: assets.editStairCouple, alt: "Bride and groom standing on classic stone steps" },
  { src: assets.editWindowCouple, alt: "Bride seen through a reflective interior window" },
];

export default function EditPage() {
  return (
    <div className="edit-portfolio-page">
      <section className="edit-portfolio-hero" aria-labelledby="portfolio-title">
        <div className="edit-portfolio-brand">The House of Vows</div>
        <div className="edit-hero-grid">
          <div className="edit-hero-image">
            <Image
              src={assets.editStairCouple}
              alt="Bride and groom standing on classic stone steps"
              fill
              priority
              sizes="(max-width: 720px) 74vw, 34vw"
            />
          </div>
        </div>
        <h1 id="portfolio-title">Portfolio</h1>
        <div className="edit-portfolio-statement">
          <h2>
            We make timeless experiences
            <span>for brides and grooms</span>
            with classic style.
          </h2>
        </div>
      </section>

      <section className="edit-carousel-section" aria-label="Portfolio highlights">
        <EditCarousel images={carouselImages} />
      </section>

      <section className="edit-weddings-section" aria-labelledby="edit-weddings-title">
        <p className="eyebrow" id="edit-weddings-title">
          Weddings
        </p>
        <div className="edit-weddings-grid">
          <div className="edit-weddings-image">
            <Image
              src={assets.editWeddingsEstate}
              alt="Bride and groom walking through an estate garden"
              fill
              sizes="(max-width: 720px) 100vw, 38vw"
            />
          </div>
          <div className="edit-weddings-image">
            <Image
              src={assets.editWeddingsLace}
              alt="Bride holding a small bouquet with lace wedding dress detail"
              fill
              sizes="(max-width: 720px) 100vw, 38vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
