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
    default: "NEXASYSTEM | Informatique, réseaux et cybersécurité à Belfort",
    template: "%s | NEXASYSTEM",
  },

  description:
    "NEXASYSTEM accompagne les TPE, PME, artisans et organisations à Belfort et dans le Territoire de Belfort en informatique, réseaux, maintenance, cybersécurité, cloud et développement web.",

  keywords: [
    "NEXASYSTEM",
    "informatique Belfort",
    "informaticien Belfort",
    "maintenance informatique Belfort",
    "réseau informatique Belfort",
    "cybersécurité Belfort",
    "installation réseau Belfort",
    "dépannage informatique Belfort",
    "création site web Belfort",
    "développement web Belfort",
    "cloud Belfort",
    "informatique TPE PME",
    "informatique Territoire de Belfort",
    "informatique Bourgogne-Franche-Comté",
  ],

  authors: [{ name: "NEXASYSTEM" }],
  creator: "NEXASYSTEM",
  publisher: "NEXASYSTEM",

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
