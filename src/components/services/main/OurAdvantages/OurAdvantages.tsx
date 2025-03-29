import { getTranslate } from "@/tolgee/server";
import Image from "next/image";
import { FC } from "react";
import s from "./ourAdvantages.module.scss";

export const OurAdvantages: FC = async () => {
  const t = await getTranslate();
  return (
    <section className={s.advantages_section}>
      <div className="container">
        <h2 className="hidden">Наши преимущества</h2>
        <ul className={s.advantages_list}>
          <li className={s.advantages_item}>
            <Image
              src="/advantages/speedDelivery.svg"
              alt="spedd icon"
              width={300}
              height={300}
              className={s.advantages_image}
            />
            <h3 className={s.advantages_card_title}>
              {t("advantages.speedTitle")}
            </h3>
            <p className={s.advantages_text}>
              {t("advantages.speedDescription")}
            </p>
          </li>
          <li className={s.advantages_item}>
            <Image
              src="/advantages/heightRating.svg"
              alt="spedd icon"
              width={300}
              height={300}
              className={s.advantages_image}
            />
            <h3 className={s.advantages_card_title}>
              {t("advantages.ratingTitle")}
            </h3>
            <p className={s.advantages_text}>{t("advantages.ratindDescr")}</p>
          </li>
          <li className={s.advantages_item}>
            <Image
              src="/advantages/shoppingCenter.svg"
              alt="spedd icon"
              width={300}
              height={300}
              className={s.advantages_image}
            />
            <h3 className={s.advantages_card_title}>
              {t("advantages.orthopedicTitle")}
            </h3>
            <p className={s.advantages_text}>
              {t("advantages.orthopedicDescr")}
            </p>
          </li>
          <li className={s.advantages_item}>
            <Image
              src="/advantages/happyClient.png"
              alt="spedd icon"
              width={300}
              height={300}
              className={s.advantages_image}
            />
            <h3 className={s.advantages_card_title}>
              {t("advantages.qualityTitle")}
            </h3>
            <p className={s.advantages_text}>{t("advantages.qualityDescr")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
