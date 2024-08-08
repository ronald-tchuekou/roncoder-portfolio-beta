import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Header } from "@src/components/header/header";
import { QueryProvider } from "@src/components/providers/query-provider";
import "@src/styles/style.css";
import type { Metadata } from "next";
import { Barrio, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const jetBrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jet-brains-mono",
});

const barrioFont = Barrio({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barrio",
});

export const metadata: Metadata = {
  title:
    "Ronald Tchuekou Portfolio, Développeur FullStack et Administrateur de systèmes",
  description:
    "Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.",
  metadataBase: new URL(
    process.env.BASE_LINK || "https://roncoder-beta.vercel.app"
  ),
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
      <body
        className={cn(
          "min-h-screen font-mono antialiased",
          jetBrainsMonoFont.variable,
          barrioFont.variable
        )}
      >
        <Header />
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
        <Analytics/>
      </body>
    </html>
  );
}
