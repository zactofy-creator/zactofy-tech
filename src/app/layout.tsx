import type { Metadata } from "next";
import localFont from "next/font/local";

const timesfont = localFont({
  src: [
    {
      path: "../fonts/times.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/times.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-times",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zactofy.com"),

  title: {
    default: "Zactofy Technologies | Website Development Company in India",
    template: "%s | Zactofy Technologies",
  },

  description:
    "Zactofy Technologies is a leading Website Development, Software Development, Mobile App Development, AI Solutions and Digital Marketing Company in India.",

  keywords: [
    "Website Development Company",
    "Software Development Company",
    "Web Design Company",
    "Next.js Development",
    "React Development",
    "Laravel Development",
    "SEO Company",
    "Digital Marketing Agency",
    "CRM Development",
    "ERP Development",
    "Mobile App Development",
    "AI Solutions",
    "Custom Software Development",
    "Ecommerce Development",
  ],

  authors: [
    {
      name: "Zactofy Technologies",
      url: "https://zactofy.com",
    },
  ],

  creator: "Zactofy Technologies",
  publisher: "Zactofy Technologies",

  applicationName: "Zactofy",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  verification: {
    google: "mdGOPp6KpPzj3HAFKeh4r3VF09iO-wL0e9If0en2qi4",
  },

  openGraph: {
    type: "website",
    url: "https://zactofy.com",
    title: "Zactofy Technologies",
    description:
      "Website Development, Software Development, Mobile Apps, AI Solutions and Digital Marketing Company.",
    siteName: "Zactofy Technologies",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zactofy Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zactofy Technologies",
    description:
      "Website Development & Software Development Company",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};