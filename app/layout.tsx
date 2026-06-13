import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.2fauto37.fr"),
  title: {
    template: "%s | 2F AUTO37 — Garage automobile Sainte-Maure-de-Touraine",
    default: "2F AUTO37 — Garage automobile Sainte-Maure-de-Touraine (37)",
  },
  description:
    "2F AUTO37, votre garage automobile à Sainte-Maure-de-Touraine (37). Révision, réparation, mécanique toutes marques. Devis gratuit. ☎ 09 88 09 53 65",
  keywords: [
    "garage automobile Sainte-Maure-de-Touraine",
    "réparation voiture 37800",
    "révision auto Indre-et-Loire",
    "mécanique auto Touraine",
    "garage pas cher Sainte-Maure",
    "entretien voiture 37 toutes marques",
    "2F AUTO37",
    "Tony Fonseca mécanicien",
  ],
  authors: [{ name: "2F AUTO37" }],
  creator: "2F AUTO37",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.2fauto37.fr",
    siteName: "2F AUTO37",
    title: "2F AUTO37 — Garage automobile Sainte-Maure-de-Touraine",
    description:
      "Garage automobile indépendant à Sainte-Maure-de-Touraine. Révision, freinage, climatisation, diagnostic. Toutes marques. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "2F AUTO37",
  url: "https://www.2fauto37.fr",
  telephone: "+33988095365",
  email: "mabilachrisna@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Chemin des Saulniers",
    addressLocality: "Sainte-Maure-de-Touraine",
    postalCode: "37800",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.1018,
    longitude: 0.6208,
  },
  openingHours: [
    "Mo 08:00-12:00",
    "Mo 14:00-18:00",
    "Tu 08:00-12:00",
    "Tu 14:00-18:00",
    "We 08:00-12:00",
    "Th 08:00-12:00",
    "Th 14:00-18:00",
    "Fr 08:00-12:00",
    "Fr 14:00-18:00",
    "Sa 09:00-13:00",
  ],
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
