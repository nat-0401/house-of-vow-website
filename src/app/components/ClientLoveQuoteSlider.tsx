"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ClientLoveQuote = {
  couple: string;
  image: string;
  quote: string;
};

export function ClientLoveQuoteSlider({ quotes }: { quotes: ClientLoveQuote[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextQuote = useCallback(() => {
    setActiveIndex((index) => (index + 1) % quotes.length);
  }, [quotes.length]);

  useEffect(() => {
    const timer = window.setInterval(showNextQuote, 4200);

    return () => window.clearInterval(timer);
  }, [showNextQuote]);

  return (
    <button
      type="button"
      className="client-quote-card"
      onClick={showNextQuote}
      aria-label="Show next client testimonial"
      aria-live="polite"
    >
      <span className="client-quote-brand" aria-hidden="true">
        {quotes.map((item, index) => (
          <span className={`client-quote-photo-frame ${index === activeIndex ? "is-active" : ""}`} key={item.image}>
            <Image src={item.image} alt="" fill sizes="(max-width: 720px) 88vw, 720px" />
          </span>
        ))}
      </span>
      <span className="client-quote-panel">
        {quotes.map((item, index) => (
          <span className={`client-quote ${index === activeIndex ? "is-active" : ""}`} key={item.couple}>
            <span className="client-quote-title">love note</span>
            <span className="client-quote-copy">&ldquo;{item.quote}&rdquo;</span>
            <span className="client-quote-couple">{item.couple}</span>
          </span>
        ))}
      </span>
    </button>
  );
}
