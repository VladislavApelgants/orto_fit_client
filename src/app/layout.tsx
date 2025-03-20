import { Footer } from "@/components/layout/Footer/Footer";
import { HeadContacts } from "@/components/layout/HeadContacts/HeadContacts";
import { Header } from "@/components/layout/Header/Header";
import { TolgeeNextProvider } from "@/tolgee/client";
import { getLanguage } from "@/tolgee/language";
import { getStaticData } from "@/tolgee/shared";
import {
  geistMono,
  geistMontserrat,
  geistPlayfairDisplay,
  geistSans,
} from "@/utils/fonts";
import type { Metadata } from "next";
import "./global.scss";

export const metadata: Metadata = {
  title: "MaryOrtoFit – Магазин ортопедических ковриков и товаров для здоровья",
  description:
    "MaryOrtoFit – магазин, где можно купить ортопедические коврики, товары для спорта, здоровья и детей. Экологичные материалы и инновационный дизайн!",
  keywords: [
    "ортопедические коврики",
    "детские массажные коврики",
    "спортивные товары",
    "товары для здоровья",
    "MaryOrtoFit",
  ],
  authors: [{ name: "MaryOrtoFit", url: "https://maryortofit.com" }],
  creator: "MaryOrtoFit",
  publisher: "MaryOrtoFit",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "MaryOrtoFit – Магазин ортопедических ковриков и товаров для здоровья",
    description:
      "Купите ортопедические коврики и товары для здоровья в MaryOrtoFit. Экологичные материалы, полезные для детей и взрослых.",
    url: "https://maryortofit.com",
    siteName: "MaryOrtoFit",
    images: [
      {
        url: "https://maryortofit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaryOrtoFit – Ортопедические коврики",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MaryOrtoFit",
    creator: "@MaryOrtoFit",
    title: "MaryOrtoFit – Магазин ортопедических ковриков",
    description:
      "Купите ортопедические коврики и товары для здоровья в MaryOrtoFit. Экологичные материалы, полезные для детей и взрослых.",
    images: ["https://maryortofit.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://maryortofit.com",
  },
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLanguage();
  const staticData = await getStaticData([locale]);

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMontserrat.variable} ${geistMontserrat.variable} ${geistPlayfairDisplay.variable} `}
      >
        <TolgeeNextProvider language={locale} staticData={staticData}>
          <HeadContacts />
          <Header />
          {children}
          <Footer />
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
