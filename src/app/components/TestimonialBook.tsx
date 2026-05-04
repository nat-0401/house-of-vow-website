"use client";

import Image from "next/image";
import { useState } from "react";

type TestimonialBookProps = {
  couple: string;
  image: string;
  quote: string;
};

export function TestimonialBook({ couple, image, quote }: TestimonialBookProps) {
  const [phase, setPhase] = useState(0);
  const isOpen = phase > 0;
  const isFlipped = phase === 2;
  const cue = phase === 0 ? "Tap to open" : phase === 1 ? "Tap to flip" : "Tap to tuck away";

  return (
    <button
      type="button"
      className={`testimonial-letter ${isOpen ? "is-open" : ""} ${isFlipped ? "is-flipped" : ""}`}
      onClick={() => setPhase((current) => (current + 1) % 3)}
      aria-expanded={isOpen}
    >
      <span className="testimonial-letter-cue">{cue}</span>
      <span className="testimonial-letter-photo-panel">
        <Image src={image} alt={`${couple} wedding portrait`} fill sizes="(max-width: 720px) 88vw, 34vw" />
      </span>
      <span className="testimonial-envelope-stage">
        <span className="testimonial-letter-paper">
          <span className="testimonial-letter-front">
            <span className="testimonial-letter-names">{couple}</span>
            <span className="testimonial-letter-note">a love note</span>
          </span>
          <span className="testimonial-letter-back">
            <span>“{quote}”</span>
            <strong>{couple}</strong>
          </span>
        </span>
        <span className="testimonial-envelope" aria-hidden="true">
          <span className="envelope-back" />
          <span className="envelope-flap" />
          <span className="envelope-left" />
          <span className="envelope-right" />
          <span className="envelope-front" />
        </span>
      </span>
    </button>
  );
}
