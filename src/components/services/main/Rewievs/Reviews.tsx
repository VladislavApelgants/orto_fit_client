import { FC } from "react";
import { ReviewsList } from "./ReviewsList/ReviewsList";
import s from "./reviews.module.scss";

export const Reviews: FC = () => {
  return (
    <section className={s.reviews_section}>
      <div className="container">
        <h2 className={s.reviews_title}>Отзывы наших клиентов</h2>
        <ReviewsList />
      </div>
    </section>
  );
};
