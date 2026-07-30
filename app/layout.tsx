import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "MediBook";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Prenez rendez-vous avec un professionnel de santé simplement et rapidement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Rendez-vous médicaux en ligne`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName,
    title: `${siteName} | Rendez-vous médicaux en ligne`,
    description: siteDescription,
    images: [
      {
        url: "/images/medibook-og.jpg",
        width: 1200,
        height: 630,
        alt: "MediBook, plateforme de rendez-vous médicaux",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}