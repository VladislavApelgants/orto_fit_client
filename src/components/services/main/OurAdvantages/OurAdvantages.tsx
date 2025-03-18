import Image from "next/image";
import { FC } from "react";
import s from "./ourAdvantages.module.scss";

export const OurAdvantages: FC = () => {
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
            <h3 className={s.advantages_card_title}>Быстрая отправка</h3>
            <p className={s.advantages_text}>
              Мы гарантируем оперативную обработку и отправку заказов в
              кратчайшие сроки. Ваш заказ будет отправлен сразу после оформления
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
              Высокие рейтинги и реальные отзывы.
            </h3>
            <p className={s.advantages_text}>
              Мы гордимся доверием наших клиентов и стремимся к лучшему качеству
              обслуживания.
            </p>
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
              Ортопедические центры и детские сады.
            </h3>
            <p className={s.advantages_text}>
              Наши коврики используются в специализированных учреждениях для
              детского развития и реабилитации.
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
              Качество товара и обслуживания
            </h3>
            <p className={s.advantages_text}>
              1000+ довольных клиентов. Наши коврики выбрали сотни семей по всей
              стране.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
