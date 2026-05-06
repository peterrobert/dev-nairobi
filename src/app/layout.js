import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./componets/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "DevNairobi - Elevate Your Local Business with Expert Web Solutions",
  description:
    "DevNairobi specializes in crafting high-converting websites tailored for Nairobi's local businesses. Our solutions are designed to boost your online presence, attract more customers, and drive growth in the competitive Nairobi market. Partner with us to transform your digital footprint and dominate local search results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}  h-full antialiased`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        ></link>
      </head>
      <body className="m-0 p-0 antialiased overflow-x-hidden selection:bg-primary selection:text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
