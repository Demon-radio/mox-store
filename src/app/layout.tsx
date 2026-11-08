import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "./components/Footer";
import type { Viewport } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://Demon-radio.github.io/mox-store"),
  title: "Mox Store | Game Top-Up, Subscriptions & Digital Services",
  description:
    "Mox Store — everything you need in one place: game top-ups, streaming & app subscriptions, AI plans, PayPal transfers and ad services. Fast, trusted and secure — 24/7 support via WhatsApp.",
  openGraph: {
    title: "Mox Store | Game Top-Up, Subscriptions & Digital Services",
    description:
      "Game top-ups, subscriptions, AI plans, apps & PayPal — delivered 24/7.",
    type: "website",
    images: [
      {
        url: "/mox-store/images/mox-banner.png",
        width: 1600,
        height: 900,
        alt: "Mox Store — Everything you need in one place. Trusted digital services, fast and secure.",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#171717] font-sans text-white`}
      >
        <NextTopLoader
          height={2}
          color="linear-gradient(to right, rgb(255, 45, 45), rgb(227, 6, 19), rgb(168, 0, 10))"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
