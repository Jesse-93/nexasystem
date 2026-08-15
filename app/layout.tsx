import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NEXASYSTEM | Solutions informatiques pour entreprises",
    template: "%s | NEXASYSTEM",
  },

  description:
    "NEXASYSTEM accompagne les TPE, PME, artisans et organisations dans leurs projets informatiques : systèmes, réseaux, cybersécurité, cloud et développement web.",

  keywords: [
    "NEXASYSTEM",
    "informatique entreprise",
    "maintenance informatique",
    "réseau informatique",
    "cybersécurité",
    "cloud",
    "développement web",
    "TPE",
    "PME",
    "Belfort",
    "Territoire de Belfort",
    "Bourgogne-Franche-Comté",
  ],

  authors: [{ name: "NEXASYSTEM" }],
  creator: "NEXASYSTEM",
  publisher: "NEXASYSTEM",

  verification: {
    google: "8GsdFlQw8ptL_rbD9-6SkHI1hcTgCWFSq9Nl3dW3-DY",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps)  {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
