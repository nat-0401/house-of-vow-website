import Image from "next/image";
import styles from "../client-design.module.css";

export function DesignPhoto({ name, alt, className = "", src }: { name?: string; alt: string; className?: string; src?: string }) {
  return <div className={`${styles.photo} ${className}`}><Image src={src || `/client-design/${name}.webp`} alt={alt} fill sizes="(max-width: 900px) 100vw, 60vw" quality={85} /></div>;
}
