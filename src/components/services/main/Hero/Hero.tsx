import { getTranslate } from "@/tolgee/server";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import s from "./hero.module.scss";

export const Hero = async (): Promise<JSX.Element> => {
  const t = await getTranslate();
  return (
    <section className={s.hero_section}>
      <div className={s.image_wrapper}>
        <Image
          src="/hero.webp"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className={s.hero_image}
        />
      </div>
      <div className="container">
        <div className={s.info_block}>
          <p className={s.subtitle}>{t("hero.heroSubtitle")}</p>
          <h1 className={s.hero_title}>{t("hero.mainTitle")}</h1>
          <Link
            href="/"
            className={s.hero_link}
            aria-label="Відчинити усі товари"
          >
            {t("hero.more")}
          </Link>
        </div>
      </div>
    </section>
  );
};
