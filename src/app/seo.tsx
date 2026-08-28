import type { Metadata } from "next";
import { assets, founders, services } from "./content";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thehouseofvows.co";

export const siteUrl = (rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`
).replace(/\/+$/, "");

export const siteBaseUrl = new URL(siteUrl);

export const siteConfig = {
  name: "The House of Vows",
  description:
    "Intentional wedding planning, styling, branding, and design for artful celebrations in Sabah, Malaysia and destination settings.",
  email: "hello@thehouseofvows.co",
  phone: "+60136721314",
  instagram: "https://www.instagram.com/thehouseofvows.co/",
};

type SeoImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: SeoImage;
};

export const defaultOgImage: SeoImage = {
  url: assets.homeMeadow,
  width: 1536,
  height: 1024,
  alt: "Romantic wedding reception designed by The House of Vows",
};

export const routeSeo = {
  home: {
    path: "/",
    title: "Sabah Wedding Planner & Wedding Stylist",
    description:
      "The House of Vows creates intentionally designed weddings shaped by story, beauty, styling, planning, and calm execution in Sabah, Malaysia and beyond.",
    image: defaultOgImage,
  },
  about: {
    path: "/about",
    title: "About",
    description:
      "Meet The House of Vows, a Sabah wedding planning and styling studio creating personal, visually unforgettable celebrations with refined detail.",
    image: {
      url: assets.aboutFieldCouple,
      width: 1200,
      height: 1500,
      alt: "Bride and groom seated in a flower field",
    },
  },
  services: {
    path: "/services",
    title: "Wedding Planning, Styling & Branding Services",
    description:
      "Explore wedding planning, coordination, concept styling, wedding branding, and destination liaison services for couples in Sabah, Malaysia and beyond.",
    image: {
      url: assets.servicesHero,
      width: 1199,
      height: 856,
      alt: "Bride and groom walking outdoors",
    },
  },
  clientLove: {
    path: "/client-love",
    title: "Client Love",
    description:
      "Read notes from couples and see editorial wedding moments planned and styled by The House of Vows.",
    image: {
      url: assets.clientLoveHero,
      width: 700,
      height: 1052,
      alt: "Bride and groom walking through bubbles after their ceremony",
    },
  },
  edit: {
    path: "/edit",
    title: "Portfolio",
    description:
      "Explore The House of Vows portfolio of timeless wedding experiences for brides and grooms with classic style.",
    image: {
      url: assets.editStairCouple,
      width: 1800,
      height: 1212,
      alt: "Bride and groom standing on classic stone steps",
    },
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description:
      "Enquire with The House of Vows for wedding design, planning, styling, and brand direction in Sabah, Malaysia and destination celebrations.",
    image: defaultOgImage,
  },
} satisfies Record<string, PageSeo>;

export const sitemapRoutes = [
  routeSeo.home,
  routeSeo.about,
  routeSeo.services,
  routeSeo.clientLove,
  routeSeo.edit,
  routeSeo.contact,
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function metadataForRoute(page: PageSeo): Metadata {
  const image = page.image || defaultOgImage;

  return {
    title:
      page.path === "/"
        ? { absolute: `${page.title} | ${siteConfig.name}` }
        : page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      url: page.path,
      siteName: siteConfig.name,
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
      locale: "en_MY",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      images: [image.url],
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: siteBaseUrl,
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Sabah Wedding Planner & Wedding Stylist`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sabah wedding planner",
    "Malaysia wedding planner",
    "Kota Kinabalu wedding planner",
    "wedding stylist",
    "wedding branding",
    "destination wedding Malaysia",
    "luxury wedding planning Sabah",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Wedding services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Sabah Wedding Planner & Wedding Stylist`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [defaultOgImage],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Sabah Wedding Planner & Wedding Stylist`,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const servedArea = [
  { "@type": "AdministrativeArea", name: "Sabah" },
  { "@type": "Country", name: "Malaysia" },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  url: siteUrl,
  logo: absoluteUrl(assets.logoFullDark),
  image: absoluteUrl(defaultOgImage.url),
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.instagram],
  areaServed: servedArea,
  founder: founders.map((founder) => ({
    "@type": "Person",
    name: founder.name,
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer enquiries",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "MY",
      availableLanguage: ["en", "ms"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-MY",
};

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/services#services`,
  name: "Wedding planning, styling, and branding services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${siteUrl}/services#${service.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`,
      name: service.title,
      description: service.body,
      serviceType: service.title,
      url: absoluteUrl("/services"),
      areaServed: servedArea,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  })),
};

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
