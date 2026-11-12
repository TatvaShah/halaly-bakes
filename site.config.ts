import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Halaly Bakes",
  tagline: "Halal milk cakes with creamy layers and dulce de leche.",
  category: "Halal milk cakes",
  schemaType: "Bakery",
  area: "Toronto, ON",
  siteUrl: "https://halaly-bakes.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#c4a574" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Halal desserts",
    headline: "Milk cakes made to share",
    subhead: "Soft milk cakes finished with dulce de leche, in a 12 by 9 tray. Send a message to order.",
    images: [
      { src: "/images/post-2.jpg", alt: "Original milkcake with dulce de leche by Halaly Bakes" },
      { src: "/images/post-5.jpg", alt: "Chocolate milkcake tray by Halaly Bakes" },
      { src: "/images/post-7.jpg", alt: "Pistachio milkcake tray by Halaly Bakes" },
    ],
    primaryCta: { label: "Order by Instagram DM", href: "https://ig.me/m/halaly_bakes" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["Halal", "Original milkcake with dulce de leche", "12 by 9 trays", "Orders by Instagram DM"],

  about: {
    title: "Welcome to Halaly Bakes",
    body: [
      "Halaly Bakes makes halal milk cakes with creamy layers and dreamy flavours. The Original Milkcake with Dulce de Leche is soaked in a three-milk blend and finished with dulce de leche.",
      "Trays are 12 by 9 and are made for celebrations, gifting, or sharing. Orders are placed by Instagram DM. Halaly Bakes serves Toronto and the GTA.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Original milkcake with dulce de leche by Halaly Bakes" },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Milk cakes",
        items: [
          { name: "Original Milkcake with Dulce de Leche", description: "Soft and moist, finished with dulce de leche. 12 by 9 tray." },
          { name: "12 by 9 milkcake trays", description: "For celebrations and gifting." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent trays",
    items: [
      { src: "/images/post-2.jpg", alt: "Original milkcake with dulce de leche by Halaly Bakes", caption: "Dulce de leche" },
      { src: "/images/post-3.jpg", alt: "Milkcake tray with vanilla cream swirls", caption: "Vanilla cream" },
      { src: "/images/post-5.jpg", alt: "Chocolate milkcake tray by Halaly Bakes", caption: "Chocolate tray" },
      { src: "/images/post-6.jpg", alt: "Milkcake tray finished with chocolate pieces", caption: "A chocolate finish" },
      { src: "/images/post-7.jpg", alt: "Pistachio milkcake tray by Halaly Bakes", caption: "Pistachio tray" },
      { src: "/images/post-8.jpg", alt: "Chocolate pistachio milkcake tray", caption: "Chocolate and pistachio" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "halaly_bakes",
    embeds: ["https://www.instagram.com/reel/DffTSgExA8T/", "https://www.instagram.com/p/DfeRx9JhQ2Z/"],
  },

  order: {
    label: "How to order",
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Send a message with the date and the tray you would like.",
    dmMessage: "Hi Halaly Bakes! I would like to order a milkcake.\nDate needed:\nTray:\nOccasion:",
    headerCtaLabel: "DM to order",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram with the date and the tray you would like." },
    { q: "What size are the trays?", a: "Milkcake trays are posted as 12 by 9." },
    { q: "Where do you serve?", a: "Halaly Bakes serves Toronto and the GTA." },
  ],

  contact: {
    title: "Contact",
    area: "Toronto, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/halaly_bakes/" }],
  },

  seo: {
    title: "Halaly Bakes | Halal milk cakes in Toronto",
    description: "Halal milk cakes and dulce de leche trays in Toronto and the GTA. 12 by 9 trays, made to order. Order by Instagram DM.",
    keywords: ["halal milk cake Toronto", "tres leches Toronto", "Halaly Bakes"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
