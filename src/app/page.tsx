import { Categories } from "@/components/services/main/Categories/Categories";
import { ContactUs } from "@/components/services/main/ContactUs/ContactUs";
import { HealthInfo } from "@/components/services/main/HealthInfo/HealthInfo";
import { Hero } from "@/components/services/main/Hero/Hero";
import { OurAdvantages } from "@/components/services/main/OurAdvantages/OurAdvantages";
import { OurContacts } from "@/components/services/main/OurContacts/OurContacts";
import { Reviews } from "@/components/services/main/Rewievs/Reviews";
import { TopProducts } from "@/components/services/main/TopProducts/TopProducts";
import { Metadata } from "next";
import styles from "./page.module.scss";

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
};
export const viewport = {
  themeColor: "#ffffff",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <ContactUs />
      <OurAdvantages />
      <Categories />
      <TopProducts contentFlag="massage" />
      <TopProducts contentFlag="toys" />
      <HealthInfo />
      <Reviews />
      <OurContacts />
    </main>
  );
}
