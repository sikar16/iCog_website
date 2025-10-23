import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const helveticaNeue = localFont({
  variable: "--font-helvetica-neue",
  src: [
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueThin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueThinItalic.otf", weight: "100", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueUltraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueUltraLightItalic.otf", weight: "200", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueLightItalic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueRoman.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueItalic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueMediumItalic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueBold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueBoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueHeavy.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueHeavyItalic.otf", weight: "800", style: "italic" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueBlack.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/helvetica-neue-5/HelveticaNeueBlackItalic.otf", weight: "900", style: "italic" },
  ],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iCog ACC",
  description: "iCog ACC is dedicated to democratizing access to technology through training, product development, and consultancy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${geistMono.variable}  antialiased  w-full overflow-x-hidden`}
      >
        <div>
          <Header />
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
