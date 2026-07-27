import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MediBook | Réservation médicale",
    template: "%s | MediBook",
  },
  description:
    "Recherchez un professionnel de santé et organisez votre rendez-vous médical en quelques étapes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geist.className} antialiased`}>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}