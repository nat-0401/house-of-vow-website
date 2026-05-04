"use client";

import Image from "next/image";
import { CSSProperties, PointerEvent, useEffect, useMemo, useRef, useState } from "react";

type EditCarouselImage = {
  alt: string;
  src: string;
};

type EditCarouselProps = {
  images: EditCarouselImage[];
};

export function EditCarousel({ images }: EditCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const orderedImages = useMemo(() => images, [images]);

  useEffect(() => {
    if (isDragging) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % orderedImages.length);
    }, 3400);

    return () => window.clearInterval(timer);
  }, [isDragging, orderedImages.length]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const rotate = (direction: number) => {
    setActiveIndex((current) => {
      const next = current + direction;
      return (next + orderedImages.length) % orderedImages.length;
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    dragOffsetRef.current = 0;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) {
      return;
    }

    dragOffsetRef.current = event.clientX - startXRef.current;

    if (!frameRef.current) {
      frameRef.current = window.requestAnimationFrame(() => {
        setDragOffset(dragOffsetRef.current);
        frameRef.current = null;
      });
    }
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) {
      return;
    }

    const finalOffset = dragOffsetRef.current;

    if (finalOffset > 70) {
      rotate(-1);
    } else if (finalOffset < -70) {
      rotate(1);
    }

    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(false);
    pointerIdRef.current = null;
  };

  return (
    <div className="edit-carousel-shell">
      <div
        className={`edit-carousel-track ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        style={{ "--drag-offset": `${dragOffset}px` } as CSSProperties}
      >
        {orderedImages.map((image, index) => {
          let position = index - activeIndex;

          if (position > orderedImages.length / 2) {
            position -= orderedImages.length;
          } else if (position < -orderedImages.length / 2) {
            position += orderedImages.length;
          }

          const isActive = position === 0;
          const distance = Math.min(Math.abs(position), 3);
          const cardStyle = {
            "--position": position,
            "--card-x": `calc(${position} * clamp(220px, 24vw, 340px))`,
            "--card-y": `${distance * 18}px`,
            "--card-scale": isActive ? 1.08 : 1 - Math.min(distance, 2) * 0.08,
            "--card-opacity": 1 - distance * 0.16,
            zIndex: 5 - distance,
          } as CSSProperties;

          return (
            <figure
              className={`edit-carousel-card ${isActive ? "is-active" : ""}`}
              key={image.src}
              style={cardStyle}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 72vw, 22vw" />
            </figure>
          );
        })}
      </div>
      <div className="edit-carousel-controls" aria-label="Portfolio carousel controls">
        <button type="button" onClick={() => rotate(-1)} aria-label="Previous image">
          ←
        </button>
        <button type="button" onClick={() => rotate(1)} aria-label="Next image">
          →
        </button>
      </div>
    </div>
  );
}
