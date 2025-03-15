import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./productCard.module.scss";

export type ProductCardType = {
  image: string;
  title: string;
  price: number;
  count: number;
};

export const ProductCard: FC<ProductCardType> = ({
  image,
  title,
  price,
  count,
}) => {
  return (
    <div className={s.item}>
      <Link href="/" className={s.item_link}>
        <Image
          src={image}
          alt="some"
          width={364}
          height={364}
          className={s.image}
        />
        <div className={s.item_info_block}>
          <h3 className={s.item_title}>{title}</h3>
          <p className={clsx(s.item_text, s.item_count)}>
            Кількість: {count} шт
          </p>
          <p className={clsx(s.item_text, s.item_price)}>Ціна: {price} грн</p>
          <button type="button" className={s.item_button}>
            Добавить в корзину / уже добавлено
          </button>
        </div>
      </Link>
    </div>
  );
};
