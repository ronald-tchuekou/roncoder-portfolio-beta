import { cn } from "@/lib/utils";
import { Header } from "@src/components/header/header";
import "@src/styles/style.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jet-brains-mono",
});

export const metadata: Metadata = {
  title:
    "Ronald Tchuekou Portfolio, Développeur FullStack et Administrateur de systèmes",
  description:
    "Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.",
  metadataBase: new URL("https://roncoder.agyl.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    images: ["/ronald-tchuekou-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
