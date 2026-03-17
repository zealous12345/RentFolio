import type { Metadata } from "next";
import { Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-paragraph",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Retiva Investments - Real Estate Management Services",
    template: "%s | RentFolio Ltd",
  },
  description: "Rentfolio is a dynamic and professional management company, specializing in comprehensive real estate management services.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${robotoCondensed.variable} antialiased selection:bg-primary-color selection:text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
