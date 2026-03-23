import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata = {
  title: "Website Development Company in India | Zactofy",
  description:
    "Zactofy helps businesses grow with website development, AI solutions and digital marketing services.",

  verification: {
    google: "mdGOPp6KpPzj3HAFKeh4r3VF09iO-wL0e9If0en2qi4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${timesfont.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}