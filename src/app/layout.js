import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./componets/NavBar";
import Footer from "./componets/Footer";
import StickySection from "./componets/StickySection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title:
    "Leadforge Studio - Elevate Your Local Business with Expert Web Solutions",
  description:
    "Leadforge Studio specializes in crafting high-converting websites tailored for Nairobi's local businesses. Our solutions are designed to boost your online presence, attract more customers, and drive growth in the competitive Nairobi market. Partner with us to transform your digital footprint and dominate local search results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="text-slate-800 antialiased">
        <NavBar />
        {children}
        <Footer />
        <StickySection />
      </body>
    </html>
  );
}
