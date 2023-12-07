import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "@/components/Navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkyMasters Aviation | Contentful",
  description:
    "At SkyMasters Aviation, our passion for aviation takes flight, celebrating the rich history and cutting-edge technology that defines the world of aircraft. Step into the realm where the sky is not the limit but the beginning of a thrilling journey through time and innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
