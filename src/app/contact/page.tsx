import Image from "next/image";
import { EnquiryForm } from "../components/EnquiryForm";
import { assets } from "../content";

export default function ContactPage() {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="contact-paper">
        <header className="contact-masthead">
          <div className="contact-mark">
            <Image
              src={assets.logoDark}
              alt="The House of Vows"
              width={84}
              height={84}
              priority
            />
          </div>
          <p>Wedding design, planning, styling and brand direction</p>
          <p>Sabah, Malaysia and destination celebrations</p>
          <p>Est. for artful vows</p>
        </header>

        <div className="contact-title-row">
          <h1 id="contact-title">Contact Us</h1>
          <p>
            Begin with the details you know. We&apos;ll shape the next conversation
            around your celebration, your priorities, and the feeling you want the
            day to hold.
          </p>
        </div>

        <div className="contact-newsprint-grid">
          <aside className="contact-directory" aria-label="Contact details">
            <div>
              <p className="eyebrow">The Details</p>
              <a href="mailto:hello@thehouseofvows.co">hello@thehouseofvows.co</a>
              <a href="tel:+60136721314">+6 013 672 1314</a>
              <a href="https://wa.me/60136721314">WhatsApp</a>
            </div>
            <div>
              <p className="eyebrow">Social</p>
              <a href="https://instagram.com/thehouseofvows.co">@thehouseofvows.co</a>
            </div>
            <div>
              <p className="eyebrow">Notes</p>
              <p>
                Tell us about your guest count, date, venue, location, and the
                kind of atmosphere you imagine.
              </p>
            </div>
          </aside>

          <div className="contact-form-column">
            <EnquiryForm />
          </div>
        </div>

        <div className="contact-talk-strip" aria-hidden="true">
          <span>→</span>
          <strong>Let&apos;s Talk</strong>
        </div>
      </div>
    </section>
  );
}
