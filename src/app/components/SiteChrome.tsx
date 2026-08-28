"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { assets, navItems } from "../content";

export function Header() {
  const shellRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerInsideHeaderRef = useRef(false);
  const mobileNavOpenRef = useRef(false);
  const pathname = usePathname();
  const hasRevealedHomeHeaderRef = useRef(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const applyHidden = useCallback((hidden: boolean) => {
    shellRef.current?.classList.toggle("is-retracted", hidden);
  }, []);

  const clearIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  const scheduleIdleRetract = useCallback(() => {
    clearIdleTimer();
    if (pointerInsideHeaderRef.current || mobileNavOpenRef.current) {
      return;
    }

    idleTimerRef.current = setTimeout(() => {
      applyHidden(true);
      idleTimerRef.current = null;
    }, 2000);
  }, [applyHidden, clearIdleTimer]);

  const revealHeader = useCallback(() => {
    hasRevealedHomeHeaderRef.current = true;
    applyHidden(false);
  }, [applyHidden]);

  useEffect(() => {
    mobileNavOpenRef.current = isMobileNavOpen;

    if (isMobileNavOpen) {
      clearIdleTimer();
      revealHeader();
    }
  }, [clearIdleTimer, isMobileNavOpen, revealHeader]);

  useEffect(() => {
    if (!isMobileNavOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const isHome = pathname === "/";
    const getScrollY = () => window.scrollY || document.documentElement.scrollTop || 0;
    let lastY = getScrollY();
    hasRevealedHomeHeaderRef.current = !isHome || lastY > 8;

    const shouldStartHidden = isHome && !hasRevealedHomeHeaderRef.current;
    applyHidden(shouldStartHidden);
    if (!shouldStartHidden) {
      scheduleIdleRetract();
    }

    const syncHeader = () => {
      const currentY = getScrollY();

      if (isHome && !hasRevealedHomeHeaderRef.current && currentY > 2) {
        revealHeader();
        scheduleIdleRetract();
        lastY = currentY;
        return;
      }

      if (currentY < 8) {
        applyHidden(isHome && !hasRevealedHomeHeaderRef.current);
      } else if (currentY > lastY) {
        clearIdleTimer();
        applyHidden(true);
      } else if (currentY < lastY) {
        revealHeader();
        scheduleIdleRetract();
      }

      lastY = currentY;
    };

    const onWheel = (event: WheelEvent) => {
      if (isHome && !hasRevealedHomeHeaderRef.current) {
        revealHeader();
        scheduleIdleRetract();
        return;
      }

      if (event.deltaY > 0) {
        clearIdleTimer();
        applyHidden(true);
      } else if (event.deltaY < 0) {
        revealHeader();
        scheduleIdleRetract();
      }
    };

    window.addEventListener("scroll", syncHeader, { passive: true });
    document.addEventListener("scroll", syncHeader, { passive: true, capture: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    document.addEventListener("wheel", onWheel, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", syncHeader);
      document.removeEventListener("scroll", syncHeader, { capture: true });
      window.removeEventListener("wheel", onWheel);
      document.removeEventListener("wheel", onWheel, { capture: true });
      clearIdleTimer();
    };
  }, [applyHidden, clearIdleTimer, pathname, revealHeader, scheduleIdleRetract]);

  return (
    <>
      <div
        className="header-hover-zone"
        onMouseEnter={() => {
          pointerInsideHeaderRef.current = true;
          clearIdleTimer();
          revealHeader();
        }}
        onPointerEnter={() => {
          pointerInsideHeaderRef.current = true;
          clearIdleTimer();
          revealHeader();
        }}
        onPointerLeave={() => {
          pointerInsideHeaderRef.current = false;
          scheduleIdleRetract();
        }}
        aria-hidden="true"
      />
      <div ref={shellRef} className={`header-shell ${pathname === "/" ? "is-retracted" : ""}`}>
        <header
          className="site-header"
          onPointerEnter={() => {
            pointerInsideHeaderRef.current = true;
            clearIdleTimer();
            revealHeader();
          }}
          onPointerLeave={() => {
            pointerInsideHeaderRef.current = false;
            scheduleIdleRetract();
          }}
        >
          <Link href="/" className="brand-link" aria-label="The House of Vows home">
            <Image
              src={assets.logoFullRed}
              alt=""
              width={92}
              height={106}
              sizes="92px"
              quality={60}
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={`mobile-nav ${isMobileNavOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="mobile-nav-trigger"
              aria-expanded={isMobileNavOpen}
              aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
              onClick={(event) => {
                event.preventDefault();
                setMobileNavOpen((isOpen) => !isOpen);
              }}
            >
              <span />
              <span />
              <span />
            </button>
            {isMobileNavOpen ? (
              <nav id="mobile-navigation" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link href={item.href} key={item.href} onClick={() => setMobileNavOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>
          <Link href="/contact" className="enquire-link">
            Enquire
          </Link>
        </header>
      </div>
      {isMobileNavOpen ? (
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMobileNavOpen(false)}
        />
      ) : null}
    </>
  );
}

export function Footer() {
  const pathname = usePathname();
  const hasLightFooter =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/mission-vision" ||
    pathname === "/services" ||
    pathname === "/edit" ||
    pathname === "/client-love" ||
    pathname === "/contact";

  return (
    <footer className={`site-footer ${hasLightFooter ? "is-light-footer" : ""}`}>
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src={assets.logoFullRed}
            alt="The House of Vows"
            width={92}
            height={106}
            sizes="92px"
            quality={60}
          />
          <p>Intentional wedding design shaped by beauty and story.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hello@thehouseofvows.co">hello@thehouseofvows.co</a>
          <a href="tel:+60136721314">+6 013 672 1314</a>
          <a href="https://instagram.com/thehouseofvows.co">@thehouseofvows.co</a>
        </div>
        <Link href="/contact" className="footer-enquire">
          Enquire
        </Link>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {copy ? <p>{copy}</p> : null}
    </section>
  );
}

export function SplitStatement({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="split-statement">
      <div className="split-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="copy-stack">{children}</div>
      </div>
      <div className="portrait-frame">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 800px) 100vw, 42vw" />
      </div>
    </section>
  );
}
