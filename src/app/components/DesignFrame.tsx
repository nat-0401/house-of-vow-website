"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "../client-design.module.css";

export function DesignFrame({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  const frame = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    // Scale the composition together, preserving the reference's internal proportions.
    const resize = () => element.style.setProperty("--frame-scale", String(Math.min(element.clientWidth / 1470, element.clientHeight / 830)));
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();
    return () => observer.disconnect();
  }, []);
  return <section ref={frame} id={id} className={`${styles.frame} ${className}`}><div className={styles.artboard}>{children}</div></section>;
}
