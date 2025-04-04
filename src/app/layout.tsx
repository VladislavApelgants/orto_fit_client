import { Footer } from "@/components/layout/Footer/Footer";
import { HeadContacts } from "@/components/layout/HeadContacts/HeadContacts";
import { Header } from "@/components/layout/Header/Header";
import { SideCart } from "@/components/services/components/SideCart/SideCart";
import { TolgeeNextProvider } from "@/tolgee/client";
import { getLanguage } from "@/tolgee/language";
import { getStaticData } from "@/tolgee/shared";
import {
  geistMono,
  geistMontserrat,
  geistPlayfairDisplay,
  geistSans,
} from "@/utils/fonts";
import "./global.scss";

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
          <SideCart />
          <main>{children}</main>
          <Footer />
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
