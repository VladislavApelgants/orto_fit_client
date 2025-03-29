import { getTranslate } from "@/tolgee/server";
import clsx from "clsx";
import { FC } from "react";
import { ReviewsList } from "./ReviewsList/ReviewsList";
import s from "./reviews.module.scss";

export const Reviews: FC = async () => {
  const t = await getTranslate();
  return (
    <section className={clsx(s.reviews_section, "reviews_section")}>
      <div className="container">
        <h2 className={s.reviews_title}>{t("reviews.reviewsTitle")}</h2>
        <ReviewsList />
      </div>
    </section>
  );
};
