import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { company } from "@/data/settings";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baruaconstructions.in"),
  title: {
    default: "Barua Construction | Premium Real Estate in Guwahati",
    template: "%s | Barua Construction",
  },
  description: company.description,
  keywords: ["Barua Construction", "real estate Guwahati", "construction Assam", "luxury apartments Guwahati"],
  openGraph: {
    title: "Barua Construction",
    description: company.description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/hero-residence.jpg", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barua Construction",
    description: company.description,
    images: ["/images/hero-residence.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: company.name,
  description: company.description,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "H No. 1, Mother Teresa Road, Gitali Path, Gitanagar, Noonmati",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    postalCode: "781020",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
