"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { assets } from "../content";

export function VisionSlider({ quotes }: { quotes: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextQuote = useCallback(() => {
    setActiveIndex((index) => (index + 1) % quotes.length);
  }, [quotes.length]);

  useEffect(() => {
    const timer = window.setInterval(showNextQuote, 4200);

    return () => window.clearInterval(timer);
  }, [showNextQuote]);

  return (
    <div className="vision-slider" aria-live="polite">
      <p className="vision-kicker">Vision</p>
      <span className="vision-divider" />
      <button
        className="vision-quote-stage"
        type="button"
        onClick={showNextQuote}
        aria-label="Show next vision quote"
      >
        {quotes.map((quote, index) => (
          <blockquote
            className={`vision-quote ${index === activeIndex ? "is-active" : ""}`}
            key={quote}
          >
            &ldquo;{quote}&rdquo;
          </blockquote>
        ))}
      </button>
      <div className="vision-credit-logo" aria-label="The House of Vows">
        <Image src={assets.logoVisionWordmark} alt="" width={1733} height={433} />
      </div>
    </div>
  );
}
